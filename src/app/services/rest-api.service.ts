import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Empleado } from '../model/empleado';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Definir API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  //Http options:
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Manejo de errores 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  //Metodos CRUD para consumir el API RESTful
  getEmpleados(): Observable<Empleado> {
    return this.http.get<Empleado>(this.apiURL + '/empleados')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => delete empleado
  deleteEmpleado(id: any) {
    return this.http.delete<Empleado>(this.apiURL + '/empleados/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Crear empleado
  createEmpleado(empleado: any): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiURL + '/empleados', JSON.stringify(empleado), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // HttpClient API get() method => Consulta un empleado
  getEmpleado(id: string): Observable<Empleado> {
    return this.http.get<Empleado>(this.apiURL + '/empleados/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Actualiza un empleado
  updateEmpleado(id: string, empleado: any): Observable<Empleado> {
    return this.http.put<Empleado>(this.apiURL + '/empleados/' + id, JSON.stringify(empleado), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}