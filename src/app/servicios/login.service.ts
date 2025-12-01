import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpCliente: HttpClient) {}

  verificarIngreso(user: Usuario): Observable<any> {
    return this.httpCliente.post(
      `http://api-gateway-service:8081/autenticacion/token`,
      user,
      { responseType: 'text' }
    );
  }

  registrarUsuario(user: Usuario): Observable<any> {
    return this.httpCliente.post(
      `http://api-gateway-service:8081/autenticacion/registro`,
      user,
      { responseType: 'text' }
    );
  }
}
