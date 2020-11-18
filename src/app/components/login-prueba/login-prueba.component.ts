import { Component } from '@angular/core';
import { ScripsService } from 'src/app/service/scrips.service';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-login-prueba',
  templateUrl: './login-prueba.component.html',
  styleUrls: ['./login-prueba.component.css']
})
export class LoginPruebaComponent {
  
  signupForm: FormGroup
  signupForm2:FormGroup


  constructor(
    private _builder: FormBuilder,
    private carga: ScripsService) { carga.Carga(["scriptLogin"]),

    this.signupForm2 = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })


    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      nombre: [''],
      empresa: ['', Validators.required],
      domicilio: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      password2:['', Validators.required]


    })
 }

enviar(values){
    console.log(values)
  }
  enviar2(values){
    console.log(values)
  }
}
