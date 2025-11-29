import { Component, OnInit } from '@angular/core';
import { Tumor } from '../entidades/tumor';
import { ClinicaService } from '../servicios/clinica.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipos-tumor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tipos-tumor.component.html',
  styleUrl: './tipos-tumor.component.css'
})
export class TiposTumorComponent implements OnInit {
tumores: Tumor[];
tumor : Tumor = new Tumor();
activacionModalCrear: boolean;
activacionModalActualizar: boolean;

  ngOnInit(): void {
    
      this.verEjemplo();
  }

  constructor(private pacienteServicio: ClinicaService){}

  private verEjemplo(){
    this.pacienteServicio.obtenerInfo().subscribe(dato=>{
      console.log(dato);
    })
  }

  crearPaciente(){
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
     const modal= document.getElementById("modal");
   if(modal!=null){
    modal.style.display='block';
   }

  }

  actualizarModal(id: string){
    this.activacionModalCrear = false;
    this.activacionModalActualizar = true;
     const modal= document.getElementById("modal");
   if(modal!=null){
    modal.style.display='block';
   }
   this.visualizar(id);
  }
  cerrarModal(){
    this.activacionModalCrear = false;
    this.activacionModalActualizar = false;
        const modal= document.getElementById("modal");
   if(modal!=null){
    modal.style.display='none';
   }
  }
 registrarPaciente(){
   
 } 

 actualizarPaciente(){
  
 }

  desactivar(id: string){
    
  }
  visualizar(id: string){
    
  }
}
