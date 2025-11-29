import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../servicios/clinica.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../entidades/paciente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit{

pacientes: Paciente[];
paciente : Paciente = new Paciente();
activacionModalCrear: boolean;
activacionModalActualizar: boolean;

  ngOnInit(): void {

    this.listaPacientes();
    
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
  console.log(this.paciente)
   this.pacienteServicio.registrarPaciente(this.paciente).subscribe(dato=>{
      console.log("dato",dato)
   })
 } 

 actualizarPaciente(){
  this.pacienteServicio.actualizarPaciente(this.paciente).subscribe(dato=>{

  })
 }

  desactivar(id: string){
    this.pacienteServicio.desactivarPaciente(id).subscribe(dato=>{

    })
  }
  visualizar(id: string){
    this.pacienteServicio.visualizarPaciente(id).subscribe(dato=>{

    })
  }

  listaPacientes(){
    this.pacienteServicio.visualizarPacientes().subscribe(dato=>{
      this.pacientes = dato.registros
    })
  }
}
