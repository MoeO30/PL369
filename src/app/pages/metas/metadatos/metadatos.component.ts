import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/service.index';
import { SidebarService } from '../../../services/shared/sidebar.service';
import * as moment from 'moment'; // add this 1 of 4
import { MetalogroService } from '../../../services/pages/metalogro.service';
import { MetagraficasComponent } from '../metagraficas/metagraficas.component';



declare var $: any;
@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styles: []
})
export class MetadatosComponent implements OnInit {

@Input() metagraficas: MetagraficasComponent;
  asig_cz: any[] = [];
  asig_mr: any[] = [];
  personal: any[] = [];

  ucnsMR: any[] = [];

  cz: any;
  mr: any;
  filtromr: any;

  mes: any;
  mesNom: any;
  programa: any;
  year: any;
  countUs: number;
  nombres: string;
  apepaterno: string;
  apematerno: string;
  puesto: string;
  avatar: string = '/assets/dist/img/default.png';

  constructor(
    public usuario: UsuariosService,
    public sidebar: SidebarService,
    public meta: MetalogroService
  ) {
    this.filtromr = '0';

    moment.locale('es');

    this.mes = moment().format('M');
    this.mesNom = moment().format('MMMM');
    this.year = moment().format('YYYY');

    this.getusuarios();
    this.getcz();
    this.cargarcz();
    this.sidebar.menuFilter = { tmenu: 'Metas' };

    this.cargarMetaporMes();
  }

  ngOnInit() {}

  getcz() {
    this.usuario.getAsigAllCZ().subscribe((data: any) => {
      this.asig_cz = data;
    });
  }

  getusuarios() {
    this.usuario.sel_usuarios().subscribe((data: any) => {
      this.personal = data;
    });
  }

  enviarcz(cz: any) {
    this.usuario.getAsigAllMR(cz).subscribe((data: any) => {
    this.asig_mr = data;
  //  console.log(this.asig_mr);

  this.cz = $('#asigcz').val();
  this.mr = $('#asigmr').val();
  this.buscarCoorTD(this.cz, this.mr);
  this.cargarMetaporMes();
});
  }

  enviarmr() {
    this.cz = $('#asigcz').val();
    this.mr = $('#asigmr').val();
    this.buscarCoorTD(this.cz, this.mr);
    this.cargarMetaporMes();
  }

  cargarcz() {
    const intervalocz = setInterval(() => {
      this.cz = $('#asigcz').val();
      clearInterval(intervalocz);
      this.enviarcz(this.cz);
    }, 1000);

    const intervalomr = setInterval(() => {
      this.mr = $('#asigmr').val();
      clearInterval(intervalomr);
      this.buscarCoorTD(this.cz, this.mr);
    }, 1500);
  }

  getItems() {
    return this.asig_mr.filter(mr => mr.mr !== '0');
  }

  buscarCoorTD(cz: any, mr: any) {
    this.countUs = this.personal.length;
    if (mr === '0') {
      mr = 'COR';
    }

    for (let x = 0; x < this.countUs; x++) {
      if (cz === this.personal[x].cz && mr === this.personal[x].mr) {

        this.nombres = this.personal[x].nombres;
        this.apepaterno = this.personal[x].apepaterno;
        this.apematerno = this.personal[x].apepaterno;
        this.puesto = this.personal[x].puesto;
        this.avatar = `${this.usuario.urlavatar}${this.personal[x].avatar}`;

        this.nombres = `${this.nombres} ${this.apepaterno} ${this.apematerno}`;

      }
    }
  }

  cargarMetaporMes() {
    const intervalo = setInterval(() => {
      this.cz = $('#asigcz option:selected').text();
      this.mr = $('#asigmr option:selected').text();
      this.year = $('#asigyear option:selected').text();

      this.meta.cz = this.cz;
      this.meta.mr = this.mr;
      this.meta.year = this.year;
      this.meta.programa = 'REGULAR';

      this.meta
        .getUcnPorMes(this.year, this.cz, this.mr, 'REGULAR')
        .subscribe((data: any) => {
          if (this.meta.cargaUCNMes === false ) {
            this.ucnsMR = data;
            $('#TableTDMetas').DataTable().destroy();
            $('#TableTDLogros').DataTable().destroy();
            this.metagraficas.cargarTBMeta();
            this.metagraficas.cargarTBLogro();
            this.meta.cargaUCNMes = true;
          }
          // console.log(this.ucnsMR);
          clearInterval(intervalo); // deterner intervalo
        });

      // clearInterval(intervalo); // deterner intervalo
    }, 1000);
     this.meta.cargaUCNMes = false;
  }

 

}
