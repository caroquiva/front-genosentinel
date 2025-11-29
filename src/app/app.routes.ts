import { Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { TiposTumorComponent } from './tipos-tumor/tipos-tumor.component';

export const routes: Routes = [
    {path: "", redirectTo:'login',pathMatch:'full'},    
    {path: 'ingreso', component: NavegacionComponent},
    {path: 'paciente', component: PacientesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'modal', component: ModalComponent},
    {path: 'tumor', component: TiposTumorComponent}
];
