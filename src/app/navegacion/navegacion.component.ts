import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Router } from '@angular/router'; 
import { PacientesComponent } from '../pacientes/pacientes.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterOutlet,PacientesComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit{



  ngOnInit(): void {
    
  }
constructor(private router: Router){}

  cerrar(){
    localStorage.removeItem('token');
    
    this.router.navigate(['/login']);
  }
}
