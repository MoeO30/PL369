import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './usuarios/profile/profile.component';
import { AltausuarioComponent } from './usuarios/altausuario/altausuario.component';
import { ProfileimageComponent } from './usuarios/altausuario/profileimage/profileimage.component';
import { ProfiletapComponent } from './usuarios/altausuario/profiletap/ProfiletapComponent';
import { KeysPipe } from './usuarios/altausuario/profiletap.pipe';
import { FilterPipe } from './usuarios/altausuario/filterpipe.pipe';
import { DataTablesModule } from 'angular-datatables';
import { UsuariomodalComponent } from './usuarios/altausuario/profileimage/usuariomodal.component';
import { PapaParseModule } from 'ngx-papaparse';
import { DatabaseComponent } from './database/database.component';
import { MapasComponent } from './mapas/mapas.component';
import { MetagraficasComponent } from './metas/metagraficas/metagraficas.component';
import { MetadatosComponent } from './metas/metadatos/metadatos.component';
import { MetasComponent } from './metas/metas.component';

import { FusionChartsModule } from 'angular-fusioncharts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    PapaParseModule,
    FusionChartsModule, // Include in imports

  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
    AltausuarioComponent,
    ProfileimageComponent,
    ProfiletapComponent,
    KeysPipe,
    FilterPipe,
    UsuariomodalComponent,
    DatabaseComponent,
    MapasComponent,
    MetagraficasComponent,
    MetadatosComponent,
    MetasComponent,
  ],
  providers: [],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProfileComponent,
    AltausuarioComponent,
    ProfileimageComponent,
    ProfiletapComponent,
    KeysPipe,
    FilterPipe,
    UsuariomodalComponent,
    DatabaseComponent,
    MapasComponent,
  ]
})
export class PagesModule {}
