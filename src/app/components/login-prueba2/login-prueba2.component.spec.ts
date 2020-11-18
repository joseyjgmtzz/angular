import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrueba2Component } from './login-prueba2.component';

describe('LoginPrueba2Component', () => {
  let component: LoginPrueba2Component;
  let fixture: ComponentFixture<LoginPrueba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPrueba2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
