import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {
  valoresCheckbox = {
    C1: false,
    C2: false,
    C3: false,
  };
  cedula: string = '';
  constructor(
    private navController: NavController,
    private crudService: CrudService
  ) {}

  ngOnInit() {}

  Salir() {
    this.navController.navigateForward('/home');
  }
  RegistrarAlumno() {
    this.navController.navigateForward('/students');
  }
  Parquear() {}
}
