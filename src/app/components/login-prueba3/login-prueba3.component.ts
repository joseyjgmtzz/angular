import { Component } from '@angular/core';
import { ScripsService } from 'src/app/service/scrips.service';

@Component({
  selector: 'app-login-prueba3',
  templateUrl: './login-prueba3.component.html',
  styleUrls: ['./login-prueba3.component.css']
})
export class LoginPrueba3Component  {

  constructor(
    private carga: ScripsService) { carga.Carga(["scriptp3"])
    }
    


}
