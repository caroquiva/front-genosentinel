import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Gen } from '../entidades/gen';
import { GenomicaService } from '../servicios/genomica.service';
@Component({
  selector: 'app-genes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './genes.component.html',
  styleUrl: './genes.component.css',
})
export class GenesComponent implements OnInit {
  genes: Gen[];
  gen: Gen = new Gen();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaGenes();
  }

  constructor(private genomicaServicio: GenomicaService) {}

  crearGen() {
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    this.gen = new Gen();
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: string) {
    const GensCriticos = this.genes.filter((el) => {
      return el.id === id;
    });
    this.gen = GensCriticos[0];
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
    this.listaGenes();
  }
  registrarGen() {
    this.genomicaServicio.registrarGen(this.gen).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  actualizarGen() {
    this.genomicaServicio.actualizarGen(this.gen).subscribe((dato) => {
      this.cerrarModal();
    });
  }

  eliminar(id: string) {
    this.genomicaServicio.eliminarGen(id).subscribe((dato) => {
      this.listaGenes();
    });
  }

  listaGenes() {
    this.genomicaServicio.visualizarGenes().subscribe((dato) => {
      this.genes = dato;
    });
  }
}
