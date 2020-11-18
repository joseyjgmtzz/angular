import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrueba3Component } from './login-prueba3.component';

describe('LoginPrueba3Component', () => {
  let component: LoginPrueba3Component;
  let fixture: ComponentFixture<LoginPrueba3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPrueba3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrueba3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
