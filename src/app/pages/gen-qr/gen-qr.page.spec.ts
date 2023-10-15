import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenQRPage } from './gen-qr.page';

describe('GenQRPage', () => {
  let component: GenQRPage;
  let fixture: ComponentFixture<GenQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
