import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  constructor(
    private navController: NavController,
    private crudService: CrudService
  ) {}
  login() {
    this.crudService.leerUsuario().subscribe((data) => {
      data.forEach((user: any) => {
        const userData = user.payload.doc.data();
        if (
          userData.cedula === this.username &&
          userData.password === this.password
        ) {
          // ¡Inicio de sesión exitoso! Puedes navegar a otra página o realizar acciones adicionales aquí.
          console.log('Inicio de sesión exitoso');
          this.navController.navigateForward('/parking');
        } else {
          // Las credenciales son incorrectas. Puedes mostrar un mensaje de error al usuario.
          console.log('Credenciales incorrectas');
        }
      });
    });
  }
  irARegistro() {
    this.navController.navigateForward('/registro');
  }
}
