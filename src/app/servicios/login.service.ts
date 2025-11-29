import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entidades/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
   constructor(private httpCliente: HttpClient) { }
 
   verificarIngreso(user: Usuario): Observable<any>{
    console.log(user)
    const headers = new HttpHeaders({
  'Content-Type': 'text/plain' 
});
     return this.httpCliente.post(`http://localhost:8081/autenticacion/token`,user,{responseType:  'text'});
   }
}
