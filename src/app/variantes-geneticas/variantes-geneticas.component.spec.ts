import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantesGeneticasComponent } from './variantes-geneticas.component';

describe('VariantesGeneticasComponent', () => {
  let component: VariantesGeneticasComponent;
  let fixture: ComponentFixture<VariantesGeneticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantesGeneticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariantesGeneticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
