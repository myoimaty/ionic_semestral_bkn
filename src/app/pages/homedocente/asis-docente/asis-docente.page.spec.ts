import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisDocentePage } from './asis-docente.page';

describe('AsisDocentePage', () => {
  let component: AsisDocentePage;
  let fixture: ComponentFixture<AsisDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsisDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
