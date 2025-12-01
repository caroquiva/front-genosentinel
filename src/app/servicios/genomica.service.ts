import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gen } from '../entidades/gen';
import { VariantesGeneticas } from '../entidades/variantesGeneticas';
import { Reportes } from '../entidades/reportes';

@Injectable({
  providedIn: 'root'
})
export class GenomicaService {

  constructor(private httpCliente: HttpClient) { }
  
    URLG ="http://api-gateway-service:8081/genes/"
  
    URLVG = "http://api-gateway-service:8081/variants/"
  
    URLR = "http://api-gateway-service:8081/reports/"
  
    registrarGen(datos: Gen): Observable<any>{
    
      return this.httpCliente.post(`${this.URLG}`,datos);
    }
  
    actualizarGen(datos: Gen): Observable<any>
    {
      return this.httpCliente.put(`${this.URLG}${datos.id}/`,datos);
    }
  
    visualizarGen(id: String): Observable<any>{
      return this.httpCliente.get(`${this.URLG}${id}`);
    }
  
    visualizarGenes(): Observable<any>{
      return this.httpCliente.get(`${this.URLG}`);
    }
  
    eliminarGen(id: String): Observable<any>{
      return this.httpCliente.delete(`${this.URLG}${id}`);
    }


    registrarVarianteGenetica(datos: VariantesGeneticas): Observable<any>{
    
      return this.httpCliente.post(`${this.URLVG}`,datos);
    }
  
    actualizarVarianteGenetica(datos: VariantesGeneticas): Observable<any>
    {
      return this.httpCliente.put(`${this.URLVG}${datos.id}/`,datos);
    }
  
    visualizarVarianteGenetica(id: String): Observable<any>{
      return this.httpCliente.get(`${this.URLVG}${id}`);
    }
  
    visualizarVariantesGeneticas(): Observable<any>{
      return this.httpCliente.get(`${this.URLVG}`);
    }
  
    eliminarVarianteGenetica(id: String): Observable<any>{
      return this.httpCliente.delete(`${this.URLVG}${id}`);
    }

    registrarReporte(datos: Reportes): Observable<any>{
    
      return this.httpCliente.post(`${this.URLR}`,datos);
    }
  
    actualizarReporte(datos: Reportes): Observable<any>
    {
      return this.httpCliente.put(`${this.URLR}${datos.id}/`,datos);
    }
  
    visualizarReporte(id: String): Observable<any>{
      return this.httpCliente.get(`${this.URLR}${id}`);
    }
  
    visualizarReportes(): Observable<any>{
      return this.httpCliente.get(`${this.URLR}`);
    }
  
    eliminarReportes(id: String): Observable<any>{
      return this.httpCliente.delete(`${this.URLR}${id}`);
    }

}
