import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import jsQR from 'jsqr';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { Iasist } from 'src/app/interfaces/iasist';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
})
export class LectorPage {

  langs: string[] = [];
  idioma!: string;
  scannedQRCode: string | null = null;
  scannedImage: string | null = null;
  urlEscaneado: string | null = null;
  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput!: ElementRef;
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult: string | null = null;
  loading: HTMLIonLoadingElement | null = null;

  constructor(
    private transService: TranslateService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private firestore: FirestoreService,
    private authService: AuthfirebaseService,
    private router: Router
  ) {
    this.langs = this.transService.getLangs();
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  ngAfterViewInit() {
    if (this.canvas) {
      this.canvasElement = this.canvas.nativeElement;
      this.canvasContext = this.canvasElement.getContext('2d');
      this.videoElement = this.video.nativeElement;
    }
  }

  async startScan() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });

    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data as string;
        this.showQrToast();
        this.saveAsistencia(code.data);
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async saveAsistencia(qrData: string) {
    const user = await this.authService.getUserInfo();
    if (user) {
      const qrInfo = qrData.split(',');
      const estudianteNombre = qrInfo[0].trim();
      const docenteNombre = qrInfo[1].trim();
  
      const asistencia: Iasist = {
        nombre: estudianteNombre,
        fecha: new Date().toISOString(),
        docente: docenteNombre,
        userId: user.uid,
      };
  
      this.firestore.addAsistencia(asistencia);
  
      // Redirige a la página de asistencias después de guardar
      this.router.navigate(['asistencias']);
  
      // Muestra un mensaje con Sweet Alert
      Swal.fire({
        icon: 'success',
        title: 'Asistencia guardada exitosamente',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false
      });
    }
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: '¡Código QR escaneado exitosamente!',
      duration: 2000,
    });
    await toast.present();
  }

  stopScan() {
    this.scanActive = false;
    this.scanResult = null;

    if (this.videoElement) {
      this.videoElement.style.display = 'none';
    }
  }
}
