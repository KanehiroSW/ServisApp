import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-generado',
  templateUrl: './reporte-generado.page.html',
  styleUrls: ['./reporte-generado.page.scss'],
})
export class ReporteGeneradoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  salir(){
    this.navCtrl.navigateRoot('/login');
  }
  ngOnInit() {
  }

}
