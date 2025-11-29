import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposTumorComponent } from './tipos-tumor.component';

describe('TiposTumorComponent', () => {
  let component: TiposTumorComponent;
  let fixture: ComponentFixture<TiposTumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposTumorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposTumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
