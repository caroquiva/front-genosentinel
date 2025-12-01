import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VariantesGeneticas } from '../entidades/variantesGeneticas';
import { GenomicaService } from '../servicios/genomica.service';
@Component({
  selector: 'app-variantes-geneticas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './variantes-geneticas.component.html',
  styleUrl: './variantes-geneticas.component.css',
})
export class VariantesGeneticasComponent implements OnInit {
  variantesGenes: VariantesGeneticas[];
  varianteGen: VariantesGeneticas = new VariantesGeneticas();
  activacionModalCrear: boolean;
  activacionModalActualizar: boolean;

  ngOnInit(): void {
    this.listaVariantesGeneticas();
  }

  constructor(private genomicaServicio: GenomicaService) {}

  crearVarianteGenetica() {
    this.varianteGen = new VariantesGeneticas();
    this.activacionModalCrear = true;
    this.activacionModalActualizar = false;
    const modal = document.getElementById('modal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  actualizarModal(id: any) {
    const seleccion = this.variantesGenes.filter((el) => {
      return el.gene === id;
    });
    this.varianteGen = seleccion[0];
    this.varianteGen.geneId = id;
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
    this.listaVariantesGeneticas();
  }
  registrarVarianteGenetica() {
    this.genomicaServicio
      .registrarVarianteGenetica(this.varianteGen)
      .subscribe((dato) => {
        this.cerrarModal();
      });
  }

  actualizarVarianteGenetica() {
    this.genomicaServicio
      .actualizarVarianteGenetica(this.varianteGen)
      .subscribe((dato) => {
        this.cerrarModal();
      });
  }

  eliminar(id: any) {
    this.genomicaServicio.eliminarVarianteGenetica(id).subscribe((dato) => {
      this.listaVariantesGeneticas();
    });
  }

  listaVariantesGeneticas() {
    this.genomicaServicio.visualizarVariantesGeneticas().subscribe((dato) => {
      this.variantesGenes = dato;
    });
  }
}
