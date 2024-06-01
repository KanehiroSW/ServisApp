import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  usuario="";
  codigoUsuario="";
  passwordNuevo="";
  confirmarPassword="";
  constructor(private router: Router) { }
  recuperar() {
    

    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
