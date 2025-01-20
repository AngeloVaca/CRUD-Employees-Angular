import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  empleados: any = [];
  constructor(
    public restApi: RestApiService
  ) { }
  ngOnInit(): void {
    this.getEmpleados()
  }
  //Obtener la lista de empleados:
  getEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.empleados = data;
    })
  }

  // Borrar un empleado
  deleteEmpleado(id: any) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.restApi.deleteEmpleado(id).subscribe(data => {
        this.getEmpleados()
      })
    }
  }
}
