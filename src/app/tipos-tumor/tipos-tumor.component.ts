import { Component, OnInit } from '@angular/core';
import { Tumor } from '../entidades/tumor';
import { ClinicaService } from '../servicios/clinica.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipos-tumor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tipos-tumor.component.html',
  styleUrl: './tipos-tumor.component.css',
})
export class TiposTumorComponent implements OnInit {
  tumores: Tumor[];
  tumor: Tumor = new Tumor();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaTipoTumors();
  }

  constructor(private clinicaServicio: ClinicaService) {}

  crearTipoTumor() {
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    this.tumor = new Tumor();
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: string) {
    const TipoTumorsCriticos = this.tumores.filter((el) => {
      return el.identifier === id;
    });
    this.tumor = TipoTumorsCriticos[0];
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
    this.listaTipoTumors();
  }
  registrarTipoTumor() {
    this.clinicaServicio.registrarTipoTumor(this.tumor).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  actualizarTipoTumor() {
    this.clinicaServicio.actualizarTipoTumor(this.tumor).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  eliminar(id: string) {
    this.clinicaServicio.eliminarTipoTumor(id).subscribe((dato) => {
      this.listaTipoTumors();
    });
  }

  listaTipoTumors() {
    this.clinicaServicio.visualizarTiposTumores().subscribe((dato) => {
      this.tumores = dato.registros;
    });
  }
}
