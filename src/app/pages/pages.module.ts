
// MODULOS ANGULAR
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// MODULOS IMPORTADOS
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { PapaParseModule } from 'ngx-papaparse';
import { FilterPipeModule } from 'ngx-filter-pipe';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// PIPES
import { KeysPipe } from './usuarios/altausuario/profiletap.pipe';
import { FilterPipe } from './usuarios/altausuario/filterpipe.pipe';
import { CapitalizadoPipe } from '../pipes/capitalizado.pipe';

// COMPORNETES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './usuarios/profile/profile.component';
import { AltausuarioComponent } from './usuarios/altausuario/altausuario.component';
import { ProfileimageComponent } from './usuarios/altausuario/profileimage/profileimage.component';
import { ProfiletapComponent } from './usuarios/altausuario/profiletap/ProfiletapComponent';
import { UsuariomodalComponent } from './usuarios/altausuario/profileimage/usuariomodal.component';
import { DatabaseComponent } from './database/database.component';
import { MapasComponent } from './mapas/mapas.component';
import { MetagraficasComponent } from './metas/metagraficas/metagraficas.component';
import { MetadatosComponent } from './metas/metadatos/metadatos.component';
import { MetasComponent } from './metas/metas.component';

/// FUSIONCHAR
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, FintTheme);

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
    FusionChartsModule,
    FilterPipeModule

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
    CapitalizadoPipe
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
    FusionChartsModule,
  ]
})
export class PagesModule {}
