import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string ='';
  password: string ='';
  
  constructor(private router: Router) { }
  login(){
    // Aquí puedes agregar la lógica para validar el usuario y contraseña
         
       this.router.navigate(['/inicio-reporte']);
      }
      recuperarCuenta(event: Event){
        event.preventDefault();
        this.router.navigate(['/recuperar']);
    }
  ngOnInit() {
  }

}
