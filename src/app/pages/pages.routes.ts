import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AltausuarioComponent } from './usuarios/altausuario/altausuario.component';
import { DatabaseComponent } from './database/database.component';
import { MapasComponent } from './mapas/mapas.component';
import { MetasComponent } from './metas/metas.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'altausuario', component: AltausuarioComponent },
      { path: 'database', component: DatabaseComponent },
      { path: 'mapas', component: MapasComponent },
      { path: 'metas', component: MetasComponent },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
