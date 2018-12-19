import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseComponentService {
  MenuDataBase: any = [
    {
      modulo: 'USUARIOS',
      submenu: [
        {
          titulo: 'USIARIOS',
          id_file: 'file-Usuarios',
          file: 'file-Usuarios[]',
          textfile: 'UpJsonUsuarios',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'usuarios',
          progressClass: 'progress-bar-primary',
          progressName: 'progressUsuarios',
          namecollapsed: 'btn-usuarios',
          btncollapsed: false,
          msg_proceso: '',
          x: 0,
          y: 0
        }
      ]
    },

    {
      modulo: 'META-LOGRO',
      submenu: [
        {
          titulo: 'META-MEVYT-ALFA-PEC',
          id_file: 'file-MetaR',
          file: 'file-Metar[]',
          textfile: 'UpJsonMetaR',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'MetaR',
          progressClass: 'progress-bar-navy',
          progressName: 'progressMetaR',
          namecollapsed: 'btn-MetaR',
          btncollapsed: false,
          msg_proceso: '',
          x: 1,
          y: 0
        },
        {
          titulo: 'LOGRO-MEVYT',
          id_file: 'file-LogroMevyt',
          file: 'file-LogroMevyt[]',
          textfile: 'UpJsonLogroR',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'LogroMevyt',
          progressClass: 'progress-bar-navy',
          progressName: 'progressLogroMevyt',
          namecollapsed: 'btn-LogroMevyt',
          btncollapsed: false,
          msg_proceso: '',
          x: 1,
          y: 1
        },
        // {
        // //   titulo: 'META-ALFA',
        // //   id_file: 'file-META-ALF',
        // //   file: 'file-META-ALF[]',
        // //   textfile: 'UpJsonMETA-ALF',
        // //   class: 'box box-navy box-solid collapsed-box',
        // //   btn: 'btn btn-navy',
        // //   page: 'META-ALF',
        // //   progressClass: 'progress-bar-navy',
        // //   progressName: 'progressMetaAlfa',
        // //   namecollapsed: 'btn-MetaAlfa',
        // //   btncollapsed: false,
        // //   x: 1,
        // //   y: 2
        // // },
        {
          titulo: 'LOGRO-ALFA',
          id_file: 'file-LOGRO-ALF',
          file: 'file-LOGRO-ALF[]',
          textfile: 'UpJsonLOGRO-ALF',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'LOGRO-ALF',
          progressClass: 'progress-bar-navy',
          progressName: 'progressLogroAlf',
          namecollapsed: 'btn-LogroAlfa',
          btncollapsed: false,
          msg_proceso: '',
          x: 1,
          y: 2,
        },
        // {
        //   titulo: 'META-PEC',
        //   id_file: 'file-META-PEC',
        //   file: 'file-META-PEC[]',
        //   textfile: 'UpJsonMETA-PEC',
        //   class: 'box box-navy box-solid collapsed-box',
        //   btn: 'btn btn-navy',
        //   page: 'META-PEC',
        //   progressClass: 'progress-bar-navy',
        //   progressName: 'progressMetaPec',
        //   namecollapsed: 'btn-MetaPec',
        //   btncollapsed: false,
        //   x: 1,
        //   y: 4
        // },
         {
          titulo: 'LOGRO-PEC',
          id_file: 'file-LOGRO-PEC',
          file: 'file-LOGRO-PEC[]',
          textfile: 'UpJsonLOGRO-PEC',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'LOGRO-PEC',
          progressClass: 'progress-bar-navy',
          progressName: 'progressLogroPec',
          namecollapsed: 'btn-LogroPec',
          btncollapsed: false,
          msg_proceso: '',
          x: 1,
          y: 3
        }
      ]
    },
    {
      modulo: 'SEGUIMIENTO',
      submenu: [
        {
          titulo: 'EDUCANDOS-ALFA',
          id_file: 'file-edu-alfa',
          file: 'file-edu-alfa[]',
          textfile: 'UpJsonEdu-Alfa',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'EduAlfa',
          progressClass: 'progress-bar-primary',
          progressName: 'progressEduAlfa',
          namecollapsed: 'btn-EduAlfa',
          btncollapsed: false,
          msg_proceso: '',
          x: 2,
          y: 0
        },
        {
          titulo: 'EDUCANDOS-ACTIVOS',
          id_file: 'file-edu-act',
          file: 'file-edu-act[]',
          textfile: 'UpJsonEdu-Act',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'EduAct',
          progressClass: 'progress-bar-primary',
          progressName: 'progressEduAct',
          namecollapsed: 'btn-EduAAct',
          btncollapsed: false,
          msg_proceso: '',
          x: 2,
          y: 1
        },
        {
          titulo: 'EDUCANDOS-INACTIVOS',
          id_file: 'file-edu-inac',
          file: 'file-edu-inac[]',
          textfile: 'UpJsonEdu-Inac',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'EduInac',
          progressClass: 'progress-bar-primary',
          progressName: 'progressEduInac',
          namecollapsed: 'btn-EduInac',
          btncollapsed: false,
          msg_proceso: '',
          x: 2,
          y: 2
        },
        {
          titulo: 'EDUCANDOS-DE-BAJA',
          id_file: 'file-edu-baja',
          file: 'file-edu-baja[]',
          textfile: 'UpJsonEdu-baja',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'EduBaja',
          progressClass: 'progress-bar-primary',
          progressName: 'progressEduBaja',
          namecollapsed: 'btn-EduAlfa',
          btncollapsed: false,
          msg_proceso: '',
          x: 2,
          y: 3
        },
        {
          titulo: 'EDUCANDOS-POR-INACTIVAR',
          id_file: 'file-edu-p-inac',
          file: 'file-edu-p-inac[]',
          textfile: 'UpJsonEdu-p-inac',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'Edu-p-Inac',
          progressClass: 'progress-bar-primary',
          progressName: 'progressEdu-p-Inac',
          namecollapsed: 'btn-Edu-p-Inac',
          btncollapsed: false,
          msg_proceso: '',
          x: 2,
          y: 4
        }
      ]
    },
    {
      modulo: 'PRODUCTIVIDAD',
      submenu: [
        {
          titulo: 'TELECOMM',
          id_file: 'file-TELECOMM',
          file: 'file-TELECOMM[]',
          textfile: 'UpJsonTELECOM',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'TELECOMM',
          progressClass: 'progress-bar-navy',
          progressName: 'progressTELECOMM',
          namecollapsed: 'btn-TELECOMM',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 0
        },
        {
          titulo: 'TELECOMM-10-14',
          id_file: 'file-TELECOMM-10-14',
          file: 'file-TELECOMM-10-14[]',
          textfile: 'UpJsonTELECOM-10-14',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'TELECOMM-10-14',
          progressClass: 'progress-bar-navy',
          progressName: 'progressTELECOMM-10-14',
          namecollapsed: 'btn-TELECOMM-10-14',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 1
        },
        {
          titulo: 'RECIBOS',
          id_file: 'file-RECIBOS',
          file: 'file-RECIBOS[]',
          textfile: 'UpJsoRECIBOS',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'RECIBOS',
          progressClass: 'progress-bar-navy',
          progressName: 'progressRECIBOS',
          namecollapsed: 'btn-RECIBOS',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 2
        },
        {
          titulo: 'RECIBOS-10-14',
          id_file: 'file-RECIBOS-10-14',
          file: 'file-RECIBOS-10-14[]',
          textfile: 'UpJsoRECIBOS-10-14',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'RECIBOS-10-14',
          progressClass: 'progress-bar-navy',
          progressName: 'progressRECIBOS-10-14',
          namecollapsed: 'btn-RECIBOS-10-14',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 3
        },
        {
          titulo: 'VALIDACIONES',
          id_file: 'file-VALIDACIONES',
          file: 'file-VALIDACIONES[]',
          textfile: 'UpJsoVALIDACIONES',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'VALIDACIONES',
          progressClass: 'progress-bar-navy',
          progressName: 'progressVALIDACIONES',
          namecollapsed: 'btn-VALIDACIONES',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 4
        },
        {
          titulo: 'UNI-OPE',
          id_file: 'fileUNI-OPES',
          file: 'file-UNI-OPE[]',
          textfile: 'UpJsoUNI-OPE',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'UNI-OPE',
          progressClass: 'progress-bar-navy',
          progressName: 'progressUNI-OPE',
          namecollapsed: 'btn-UNI-OPE',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 5
        },
        {
          titulo: 'CATALOGOS',
          id_file: 'file-CATALOGOS',
          file: 'file-CATALOGOS[]',
          textfile: 'UpJsoCATALOGOS',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'CATALOGOS',
          progressClass: 'progress-bar-navy',
          progressName: 'progressCATALOGOS',
          namecollapsed: 'btn-CATALOGOS',
          btncollapsed: false,
          msg_proceso: '',
          x: 3,
          y: 6
        }
      ]
    },
    {
      modulo: 'PLAZAS',
      submenu: [
        {
          titulo: 'PLAZAS',
          id_file: 'file-Plazas',
          file: 'file-Plazas[]',
          textfile: 'UpJsonPlazas',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'PLAZAS',
          progressClass: 'progress-bar-primary',
          progressName: 'progressPlazas',
          namecollapsed: 'btn-Plazas',
          btncollapsed: false,
          msg_proceso: '',
          x: 4,
          y: 0
        }
      ]
    },
    {
      modulo: 'AREA DE TRABAJO',
      submenu: [
        {
          titulo: 'CONTORNOS',
          id_file: 'file-CONTORNOS',
          file: 'file-CONTORNOS[]',
          textfile: 'UpJsonCONTORNOS',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'CONTORNOS',
          progressClass: 'progress-bar-navy',
          progressName: 'progressCONTORNOS',
          namecollapsed: 'btn-CONTORNOS',
          btncollapsed: false,
          msg_proceso: '',
          x: 5,
          y: 0
        }
      ]
    },

    {
      modulo: 'MODULOS',
      submenu: [
        {
          titulo: 'INVENTARIO',
          id_file: 'file-INVENTARIO',
          file: 'file-INVENTARIO[]',
          textfile: 'UpJsonINVENTARIO',
          class: 'box box-primary box-solid collapsed-box',
          btn: 'btn btn-primary',
          page: 'INVENTARIO',
          progressClass: 'progress-bar-primary',
          progressName: 'progressINVENTARIO',
          namecollapsed: 'btn-INVENTARIO',
          btncollapsed: false,
          msg_proceso: '',
          x: 6,
          y: 0,
        }
      ]
    },

    {
      modulo: 'EXAMENES',
      submenu: [
        {
          titulo: 'EXAMENES',
          id_file: 'fileEXAMENESs',
          file: 'file-EXAMENES[]',
          textfile: 'UpJsonEXAMENES',
          class: 'box box-navy box-solid collapsed-box',
          btn: 'btn btn-navy',
          page: 'EXAMENES',
          progressClass: 'progress-bar-navy',
          progressName: 'progressEXAMENES',
          namecollapsed: 'btn-EXAMENES',
          btncollapsed: false,
          msg_proceso: '',
          x: 7,
          y: 0,
        }
      ]
    }
  ];

  constructor() { }
}
