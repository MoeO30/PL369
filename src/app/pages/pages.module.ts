import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    UsuariosComponent
  ]
})
export class PagesModule { }
