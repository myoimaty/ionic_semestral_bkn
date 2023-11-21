import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { environment } from 'src/environments/environment';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDEs93DIY400YtrMxnsYSSjlr6SC60T3gU",
      authDomain: "asisapp-16a7a.firebaseapp.com",
      projectId: "asisapp-16a7a",
      storageBucket: "asisapp-16a7a.appspot.com",
      messagingSenderId: "665021421577",
      appId: "1:665021421577:web:7c5a24c169ee0fb6ec40d8",
      measurementId: "G-K7WLY2GPNB"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}
