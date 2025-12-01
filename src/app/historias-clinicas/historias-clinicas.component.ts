import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../entidades/historiaClinica';
import { ClinicaService } from '../servicios/clinica.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-historias-clinicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historias-clinicas.component.html',
  styleUrl: './historias-clinicas.component.css',
})
export class HistoriasClinicasComponent implements OnInit {
  historiasClinicas: HistoriaClinica[];
  historiaClinica: HistoriaClinica = new HistoriaClinica();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaHistoriaClinicas();
  }

  constructor(private clinicaServicio: ClinicaService) {}

  crearHistoriaClinica() {
    this.historiaClinica = new HistoriaClinica();
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: string) {
    const HistoriaClinicasCriticos = this.historiasClinicas.filter((el) => {
      return el.identifier === id;
    });
    this.historiaClinica = HistoriaClinicasCriticos[0];
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
    this.listaHistoriaClinicas();
  }
  registrarHistoriaClinica() {
    this.clinicaServicio
      .registrarHistoriaClinica(this.historiaClinica)
      .subscribe((dato) => {
        this.cerrarModal();
      });
  }

  actualizarHistoriaClinica() {
    this.clinicaServicio
      .actualizarHistoriaClinica(this.historiaClinica)
      .subscribe((dato) => {
        this.cerrarModal();
      });
  }

  eliminar(id: string) {
    this.clinicaServicio.eliminarHistoriaClinica(id).subscribe((dato) => {
      this.listaHistoriaClinicas();
    });
  }

  listaHistoriaClinicas() {
    this.clinicaServicio.visualizarHistoriasClinicas().subscribe((dato) => {
      this.historiasClinicas = dato.registros;
    });
  }
}
