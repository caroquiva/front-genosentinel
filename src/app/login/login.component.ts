import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../servicios/login.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../entidades/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  user: Usuario = new Usuario();
  mensaje: String;
ngOnInit(): void {
 
}
constructor(private router: Router, private servicioUser: LoginService) { 
  this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  }
} 

ventana(){
 
  this.servicioUser.verificarIngreso(this.user).subscribe(dato=>{
    console.log("esto: "+dato)
    if(dato!="acceso denegado"){
      localStorage.setItem('token',dato);
      
      this.router.navigateByUrl('/ingreso');
    }
    else{
      console.log(dato)
      this.abrirModal();
      this.mensaje = dato.toUpperCase();
    }
  })

}

abrirModal(){
   const modal= document.getElementById("mensaje");
   if(modal!=null){
    modal.style.display='block';
   }
}

cerrarModal(){
  const modal= document.getElementById("mensaje");
   if(modal!=null){
    modal.style.display='none';
   }
}

}
