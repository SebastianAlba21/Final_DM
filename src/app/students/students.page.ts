import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  nombreInput: any;
  preEscolarCheckbox: any;
  primariaCheckbox: any;
  bachilleratoCheckbox: any;
  alumnosLista: any[] = [];

  constructor(
    private navController: NavController,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.obtenerYListarAlumnos();
  }

  Salir() {
    this.navController.navigateForward('/home');
  }

  RecogerAlumno() {
    this.navController.navigateForward('/parking');
  }
  obtenerYListarAlumnos() {
    this.crudService.obtenerHijos().subscribe((alumnos) => {
      this.alumnosLista = [];
      alumnos.forEach((alumno: any) => {
        const alumnoData = alumno.payload.doc.data();
        this.alumnosLista.push(alumnoData);
      });
    });
  }
  guardarAlumno() {
    // Obtener el nombre del input
    const nombreInputValue = this.nombreInput.value;

    // Obtener la sección seleccionada
    let seccion = '';
    if (this.preEscolarCheckbox.checked) {
      seccion = 'Pre-Escolar';
    } else if (this.primariaCheckbox.checked) {
      seccion = 'Primaria';
    } else if (this.bachilleratoCheckbox.checked) {
      seccion = 'Bachillerato';
    }

    // Verificar que se haya ingresado un nombre y seleccionado una sección
    if (nombreInputValue && seccion) {
      // Crear el objeto del alumno
      const alumno = {
        nombre: nombreInputValue,
        seccion: seccion,
      };

      // Llamar al servicio para guardar el alumno
      this.crudService.crearHijo(alumno).then(() => {
        // Limpiar las propiedades después de guardar si es necesario
        this.nombreInput.value = ''; // Limpiar el input de nombre
        this.resetSeccionCheckboxes(); // Limpiar las selecciones de sección
      });
    } else {
      // Mostrar un mensaje de error al usuario si es necesario
      console.log('Por favor, ingrese el nombre y seleccione una sección.');
    }
  }

  // Método para resetear las selecciones de sección
  resetSeccionCheckboxes() {
    this.preEscolarCheckbox.checked = false;
    this.primariaCheckbox.checked = false;
    this.bachilleratoCheckbox.checked = false;
  }
}
