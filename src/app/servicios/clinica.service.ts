import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../entidades/paciente';
import { Tumor } from '../entidades/tumor';
import { HistoriaClinica } from '../entidades/historiaClinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private httpCliente: HttpClient) { }

  URLHC ="http://127.0.0.1:30081/api/v1/clinica/gestion-historias-clinicas/"
  clinicaCrear = "registerClinicalRecord"
  clinicaUpdate = "updateClinicalRecord"
  clinicaBuscar = "searchClinicalRecord"
  clinicasBuscar = "searchClinicalRecords"
  clinicaEliminar = "deleteClinicalRecord"

  URLP = "http://127.0.0.1:30081/api/v1/clinica/gestion-pacientes/"
  pacienteCrear = "registerPatient"
  pacienteUpdate = "updatePatient"
  pacienteBuscar = "searchPatient"
  pacientesBuscar = "searchPatients"
  pacienteDesactivar = "deactivatePatient"

  URLT = "http://127.0.0.1:30081/api/v1/clinica/gestion-tipos-tumores/"
  tipoTumorCrear = "registerTypeTumor"
  tipoTumorUpdate = "updateTypeTumor"
  tipoTumorBuscar = "searchTypeTumor"
  tiposTumoresBuscar = "searchTypeTumors"
  tipoTumorEliminar = "deleteTypeTumor"

  registrarPaciente(datos: Paciente): Observable<any>{
  
    return this.httpCliente.post(`${this.URLP}${this.pacienteCrear}`,datos);
  }

  actualizarPaciente(datos: Paciente): Observable<any>
  {
    return this.httpCliente.patch(`${this.URLP}${this.pacienteUpdate}`,datos);
  }

  visualizarPaciente(id: String): Observable<any>{
    return this.httpCliente.get(`${this.URLP}${this.pacienteBuscar}?document=${id}`);
  }

  visualizarPacientes(): Observable<any>{
    return this.httpCliente.get(`${this.URLP}${this.pacientesBuscar}`);
  }

  desactivarPaciente(id: String): Observable<any>{
    return this.httpCliente.patch(`${this.URLP}${this.pacienteDesactivar}`,{document:id});
  }


  registrarTipoTumor(datos: Tumor): Observable<any>{
  
    return this.httpCliente.post(`${this.URLT}${this.tipoTumorCrear}`,datos);
  }

  actualizarTipoTumor(datos: Tumor): Observable<any>
  {
    return this.httpCliente.patch(`${this.URLT}${this.tipoTumorUpdate}`,datos);
  }

  visualizarTipoTumor(id: String): Observable<any>{
    return this.httpCliente.get(`${this.URLT}${this.tipoTumorBuscar}?identifier=${id}`);
  }

  visualizarTiposTumores(): Observable<any>{
    return this.httpCliente.get(`${this.URLT}${this.tiposTumoresBuscar}`);
  }

  eliminarTipoTumor(id: String): Observable<any>{
    return this.httpCliente.delete(`${this.URLT}${this.tipoTumorEliminar}?identifier=${id}`);
  }


  registrarHistoriaClinica(datos: HistoriaClinica): Observable<any>{
  
    return this.httpCliente.post(`${this.URLHC}${this.clinicaCrear}`,datos);
  }

  actualizarHistoriaClinica(datos: HistoriaClinica): Observable<any>
  {
    return this.httpCliente.patch(`${this.URLHC}${this.clinicaUpdate}`,datos);
  }

  visualizarHistoriaClinica(id: String): Observable<any>{
    return this.httpCliente.get(`${this.URLHC}${this.clinicaBuscar}?identifier=${id}`);
  }

  visualizarHistoriasClinicas(): Observable<any>{
    return this.httpCliente.get(`${this.URLHC}${this.clinicasBuscar}`);
  }

  eliminarHistoriaClinica(id: String): Observable<any>{
    return this.httpCliente.delete(`${this.URLHC}${this.clinicaEliminar}?identifier=${id}`);
  }

}
