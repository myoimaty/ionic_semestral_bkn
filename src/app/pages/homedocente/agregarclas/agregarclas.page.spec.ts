import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AgregarclasPage } from './agregarclas.page';

describe('AgregarclasPage', () => {
  let component: AgregarclasPage;
  let fixture: ComponentFixture<AgregarclasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarclasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
