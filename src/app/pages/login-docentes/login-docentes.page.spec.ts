import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginDocentesPage } from './login-docentes.page';

describe('LoginDocentesPage', () => {
  let component: LoginDocentesPage;
  let fixture: ComponentFixture<LoginDocentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginDocentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
