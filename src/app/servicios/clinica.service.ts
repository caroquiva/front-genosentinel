import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../entidades/paciente';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private httpCliente: HttpClient) { }

  URLHC ="http://localhost:8081/clinica"
  clinicaCrear = "registerClinicalRecord"
  clinicaUpdate = "updateClinicalRecord"
  clinicaBuscar = "searchClinicalRecord"
  clinicaEliminar = "deleteClinicalRecord"

  URLP = "http://localhost:8081/api/v1/clinica/gestion-pacientes/"
  pacienteCrear = "registerPatient"
  pacienteUpdate = "updatePatient"
  pacienteBuscar = "searchPatient"
  pacientesBuscar = "searchPatients"
  pacienteDesactivar = "deactivatePatient"

  obtenerInfo(): Observable<any>{
    return this.httpCliente.get("http://localhost:8081/api/cocktails/search.php?i=vodka")
  }

  registrarPaciente(datos: Paciente): Observable<any>{
  
    return this.httpCliente.post(`${this.URLP}${this.pacienteCrear}`,datos);
  }

  actualizarPaciente(datos: Paciente): Observable<any>
  {
    return this.httpCliente.patch(`${this.URLP}${this.pacienteUpdate}`,datos);
  }

  visualizarPaciente(id: String): Observable<any>{
    return this.httpCliente.get(`${this.URLP}${this.pacienteBuscar}`+id);
  }

  visualizarPacientes(): Observable<any>{
    return this.httpCliente.get(`${this.URLP}${this.pacientesBuscar}`);
  }

  desactivarPaciente(id: String): Observable<any>{
    return this.httpCliente.patch(`${this.URLP}${this.pacienteDesactivar}`,id);
  }
}
