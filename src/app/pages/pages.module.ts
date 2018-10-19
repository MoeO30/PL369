import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { ProfileComponent } from './usuarios/profile/profile.component';
import { AltausuarioComponent } from './usuarios/altausuario/altausuario.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
    AltausuarioComponent
  ]
})
export class PagesModule { }
