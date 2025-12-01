import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../servicios/clinica.service';
import { CommonModule } from '@angular/common';
import { Paciente } from '../entidades/paciente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css',
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[];
  paciente: Paciente = new Paciente();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaPacientes();
  }

  constructor(private pacienteServicio: ClinicaService) {}

  crearPaciente() {
    this.paciente = new Paciente();
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: string) {
    const pacientesCriticos = this.pacientes.filter((el) => {
      return el.document === id;
    });
    this.paciente = pacientesCriticos[0];
    this.activacionModalCrear = false;
    this.activacionModalActualizar = true;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  cerrarModal() {
    this.activacionModalCrear = false;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'none';
    }
    this.listaPacientes();
  }
  registrarPaciente() {
    this.pacienteServicio.registrarPaciente(this.paciente).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  actualizarPaciente() {
    this.pacienteServicio
      .actualizarPaciente(this.paciente)
      .subscribe((dato) => {
        this.cerrarModal();
      });
  }

  desactivar(id: string) {
    this.pacienteServicio.desactivarPaciente(id).subscribe((dato) => {
      this.listaPacientes();
    });
  }

  listaPacientes() {
    this.pacienteServicio.visualizarPacientes().subscribe((dato) => {
      this.pacientes = dato.registros;
    });
  }
}
