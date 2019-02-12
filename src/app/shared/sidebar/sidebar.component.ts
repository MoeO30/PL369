import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';
import { UsuariosService } from '../../services/pages/usuarios.service';
import * as AdminLte from 'admin-lte';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {

  sidebar_menu: any = [ ];
  menuFilter: any = { tmenu: ''};

   datas: any = [];
   x: number;
   y: number;
  nodo: any;
  subnodo: any;
  titulo: boolean;
  countSubMenu: number;
  submenu: boolean = false;

  constructor(public sidebar: SidebarService,
              public usuario: UsuariosService,
              private router: Router,
              private location: PlatformLocation
              ) {

   this.sidebar.menuFilter.tmenu = 'Principal';

   // detecta back del browser
    this.location.onPopState(() => {
      console.log('pressed back!');
      this.sidebar.menuFilter.tmenu = 'Principal';
      this.router.navigate(['/dashboard']);
    });

    window.onbeforeunload = function () {
      return 'Dude, are you sure you want to refresh? Think of the kittens!';
    }

   }

  ngOnInit() {
    this.cargarMenuPrincipal();
  }

  ngOnDestroy() {
    this.sidebar.menuFilter.tmenu = 'Principal';
  }
  cargarMenuPrincipal() {

        this.sidebar.getMenuPrincipal().subscribe((data: any) => {
          this.datas = data;
          console.log(this.datas);

           for (this.x = 0; this.x < this.datas.length; this.x++) {

             if ( this.datas[this.x].menu.titulo === 'false') {
               this.titulo = false;
             } else {
               this.titulo = this.datas[this.x].menu.titulo;
             }

            this.nodo = {
            titulo: this.titulo,
            tituloMenu: this.datas[this.x].menu.tituloMenu,
            icono: this.datas[this.x].menu.icono,
            ruta: this.datas[this.x].menu.ruta,
            sub: this.submenu,
            tmenu: this.datas[this.x].menu.tmenu, submenu: []
                       };

            this.sidebar_menu.push(this.nodo);

            for (this.y = 0; this.y < this.datas[this.x].subtitulo.length; this.y++) {
              this.countSubMenu = this.datas[this.x].subtitulo.length;

              if  ( this.countSubMenu < 1) {
              this.nodo.sub = false;
              } else {
                this.nodo.sub = true;

              }

              this.subnodo = ({
                titulo: this.datas[this.x].subtitulo[this.y].titulo,
                url: this.datas[this.x].subtitulo[this.y].url,
                ruta: this.datas[this.x].subtitulo[this.y].ruta,
              });
                      this.sidebar_menu[this.x].submenu.push(this.subnodo);
                    }
          }

           console.log(this.sidebar_menu);

      });
    }

  cambioSideBar (tmenu) {
    if (tmenu === 'false') {
      $('ul').tree('open');

    } else {
      this.sidebar.menuFilter.tmenu = tmenu;

       if (tmenu === 'Principal') {
         this.router.navigate(['/dashboard']);
       }

    }
  }
}
