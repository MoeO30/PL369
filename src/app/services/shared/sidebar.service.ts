import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Administrador',
      icono: 'fa fa-database',
      submenu: [
        { titulo: 'Usuarios', url: '/altausuario'},
        { titulo: 'Mapas' },
        { titulo: 'Base de datos' }
      ]
    },
    {
      titulo: 'Meta-Logro',
      icono: 'fa fa-bar-chart',
      submenu: [
        {titulo: 'Programa Regular', url: '/ProgramaR'},
        {titulo: 'PEC', url: 'PEC'},
        {titulo: 'Programas', url: '/programa'}
      ]
    },
    {
      titulo: 'IAT',
      icono: 'fa fa-file',
      submenu: [
        {titulo: 'Experiencia Operativa'},
        {titulo: 'Experiencia Acreditacion'},
        {titulo: 'Experiencia Convenios'},
        {titulo: 'Experiencia Modulos'},
        {titulo: 'Experiencia PEC'},
      ],
    },
    {
      titulo: 'Segimiento',
      icono: 'fa  fa-users',
      submenu: [
        {titulo: 'Educandos Alfas'},
        {titulo: 'Educandos Activos'},
        {titulo: 'Educandos Inactivos'},
        {titulo: 'Educandos Bajas'},
        {titulo: 'Educandos por Inactivarse'},
        {titulo: 'Presupuesto'},
        {}
      ]
    },
    {
      titulo: 'Area de Trabajo',
      icono: 'fa fa-map-o',
      submenu: [
        {titulo: 'Mapas'},
        {titulo: 'Cambios-Movimientos'},
        {titulo: 'Nueva Unidad Operativa' },
        {titulo: 'Apertura de Sede' },
      ]
    },
    {
      titulo: 'Productividad',
      icono: 'fa fa-line-chart',
      submenu: [
        {titulo: 'Catalogos'},
        {titulo: 'Modulos'},
        {titulo: 'Figuras'},
        {titulo: 'Telecomm'},
        {titulo: 'Listados'},
        {titulo: 'Solicitud de Recursos'},
        {titulo: 'PagosFijos'},
        {titulo: 'Reportes'}
      ]
    },
    {
      titulo: 'Examenes',
      icono: 'fa fa-file-text-o',
      submenu: [
        {titulo: 'Estadisticas'}
      ]
    },
    {
      titulo: 'Modulos',
      icono: 'fa fa-book',
      submenu: [
        {titulo: 'Inventario CZ'},
        {titulo: 'Inventario Almacen' },
        {titulo: 'Exportar' },
      ]
    },
    {
    titulo: 'Plazas Comunitarias',
    icono: 'fa fa-home',
    submenu: [
        {titulo: 'Administrador'},
        {titulo: 'Mapas'},
        {titulo: 'Eventos-Jornadas'},
        {titulo: 'Estadisticas'},
        {titulo: 'Solicitudes'},
        {titulo: 'Gratificaciones'}
    ]
    },
    {
      titulo: 'Presupuestos',
      icono: 'fa fa-money',
      submenu: [
        {titulo: 'Base de Datos'},
        {titulo: 'Esportar-Scanner'},
        {titulo: 'Solicitud de Recursos'},
        {titulo: 'Viaticos'},
        {titulo: 'Visor de Solicitudes'},
      ]
    },
    {
    titulo: 'Solicitar',
    icono: 'fa fa-exclamation'
    }
  ];

  menuHeader: any = [
  {
    Label: 'SOLICITAR',
    menus: [
      {titulo: 'Solicitud de Recursos'},
      {titulo: 'Viaticos'},
      {titulo: 'Solicitar Cambio de Micro'},
      {titulo: 'Solicitar Nueva UO'},
      {titulo: 'Solicitar Apertura de Cede'}
    ]

  }

  ];
  constructor() {}
}
