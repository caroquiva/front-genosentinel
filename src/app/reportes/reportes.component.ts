import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Reportes } from '../entidades/reportes';
import { GenomicaService } from '../servicios/genomica.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent implements OnInit {
  reportes: Reportes[];
  reporte: Reportes = new Reportes();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaReportes();
  }

  constructor(private genomicaServicio: GenomicaService) {}

  crearReporte() {
    this.reporte = new Reportes();
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: string) {
    const seleccion = this.reportes.filter((el) => {
      return el.id === id;
    });
    seleccion[0] = { ...seleccion[0], variantId: seleccion[0].variant };
    this.reporte = seleccion[0];
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
    this.listaReportes();
  }
  registrarReporte() {
    this.genomicaServicio.registrarReporte(this.reporte).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  actualizarReporte() {
    this.genomicaServicio.actualizarReporte(this.reporte).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  eliminar(id: string) {
    this.genomicaServicio.eliminarReportes(id).subscribe((dato) => {
      this.listaReportes();
    });
  }

  listaReportes() {
    this.genomicaServicio.visualizarReportes().subscribe((dato) => {
      this.reportes = dato;
    });
  }
}
