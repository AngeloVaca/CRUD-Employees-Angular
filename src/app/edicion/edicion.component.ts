import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent implements OnInit {
  id: any;
  empleadoForm: FormGroup;
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.params['id'];
    this.empleadoForm = this.formBuilder.group({
      nombre: [''],
      correo: [''],
      telefono: ['']
    });
  }
  ngOnInit(): void {
    this.restApi.getEmpleado(this.id).subscribe((data: any) => {
      this.empleadoForm.setValue({
        nombre: data.nombre,
        correo: data.correo,
        telefono: data.telefono
      });
    })
  }
  // Actualiza los datos del empleado:
  updateEmpleado() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updateEmpleado(this.id, this.empleadoForm.value).subscribe(data => {
        this.router.navigate(['/consulta'])
      })
    }
  }
}