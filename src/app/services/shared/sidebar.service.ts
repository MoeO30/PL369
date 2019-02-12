import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // menu: any = [
  //   {
  //     titulo: 'NAVEGACION PRINCIPAL' ,
  //     tituloMenu: 'Administrador',
  //     icono: 'fa fa-database',
  //     submenu: [
  //               { titulo: 'Usuarios', url: '/altausuario'},
  //               { titulo: 'Mapas', url: '/mapas'},
  //               { titulo: 'Base de datos', url: '/database' }
  //               ],
  // },
  //   {
  //     titulo: false,
  //     tituloMenu: 'PLAZAS',
  //     icono: 'fa fa-database',
  //     submenu: [
  //               { titulo: 'Usuarios', url: '/altausuario'},
  //               { titulo: 'Mapas', url: '/mapas'},
  //               { titulo: 'Base de datos', url: '/database' }
  //               ],
  // },
  //   {
  //     titulo: 'PLANEACION',
  //     tituloMenu: 'MODULOS',
  //     icono: 'fa fa-database',
  //     submenu: [
  //               { titulo: 'Usuarios', url: '/altausuario'},
  //               { titulo: 'Mapas', url: '/mapas'},
  //               { titulo: 'Base de datos', url: '/database' }
  //               ],
  // },

  // ];

  url: string = 'http://localhost/planeacion369/PHP/sidebar';
  menuFilter: any = { tmenu: '' };
  constructor(private http: Http) {}

  getMenuPrincipal() {
    return this.http.get(`${this.url}/sidebar.php`)
                    .pipe(map((res: any) => res.json()));
  }

  }


