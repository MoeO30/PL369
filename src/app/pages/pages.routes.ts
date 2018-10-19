import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AltausuarioComponent } from './usuarios/altausuario/altausuario.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'altausuario', component: AltausuarioComponent },

      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
