import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApipagePage } from './apipage.page';

describe('ApipagePage', () => {
  let component: ApipagePage;
  let fixture: ComponentFixture<ApipagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApipagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
