import { Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { TiposTumorComponent } from './tipos-tumor/tipos-tumor.component';
import { HistoriasClinicasComponent } from './historias-clinicas/historias-clinicas.component';
import { GenesComponent } from './genes/genes.component';
import { VariantesGeneticasComponent } from './variantes-geneticas/variantes-geneticas.component';
import { ReportesComponent } from './reportes/reportes.component';

export const routes: Routes = [
    {path: "", redirectTo:'login',pathMatch:'full'},    
    {path: 'ingreso', component: NavegacionComponent},
    {path: 'paciente', component: PacientesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'modal', component: ModalComponent},
    {path: 'tumor', component: TiposTumorComponent},
    {path: 'historiasClinicas', component: HistoriasClinicasComponent},
    {path: 'gen', component: GenesComponent},
    {path: 'varianteGenetica', component: VariantesGeneticasComponent},
    {path: 'reportes', component: ReportesComponent}
];
