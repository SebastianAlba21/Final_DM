import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  UserName: string = '';
  UserCel: number | string = '';
  UserEmail: number | string = '';
  UserCedula: string = '';
  UserPassword: string = '';
  C1: boolean = false;
  C2: boolean = false;
  C3: boolean = false;

  constructor(
    private crudService: CrudService,
    private navController: NavController
  ) {}

  ngOnInit() {}

  createRecord() {
    let record: any = {};
    record['name'] = this.UserName;
    record['celular'] = this.UserCel;
    record['email'] = this.UserEmail;
    record['cedula'] = this.UserCedula;
    record['password'] = this.UserPassword;
    record['C1'] = this.C1;
    record['C2'] = this.C2;
    record['C3'] = this.C3;

    this.crudService
      .crearUsuario(record)
      .then((res) => {
        this.UserName = '';
        this.UserCel = '';
        this.UserEmail = '';
        this.UserCedula = '';
        this.UserPassword = '';
        this.C1 = false;
        this.C2 = false;
        this.C3 = false;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.navController.navigateForward('/home');
      });
  }
}
