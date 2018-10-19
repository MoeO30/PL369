import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const pagesRoutes: Routes = [
    { path: '', component: PagesComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'usuarios', component: UsuariosComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
