import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/service.index';
declare var $: any;
@Component({
  selector: 'app-metadatos',
  templateUrl: './metadatos.component.html',
  styles: []
})
export class MetadatosComponent implements OnInit {
  asig_cz: any[] = [];
  asig_mr: any[] = [];
  personal: any[] = [];
  cz: any;
  mr: any;
  countUs: number;
  nombres: string;
  apepaterno: string;
  apematerno: string;
  puesto: string;
  avatar: string = '/assets/dist/img/default.png';

  constructor(public usuario: UsuariosService) {
    this.getusuarios();
    this.getcz();
    this.cargarcz();
  }

  ngOnInit() {}

  getcz() {
    this.usuario.getAsigAllCZ().subscribe((data: any) => {
      this.asig_cz = data;
      console.log(this.asig_cz);
    });
  }

  getusuarios() {
    this.usuario.sel_usuarios().subscribe((data: any) => {
      this.personal = data;
      console.log(this.personal);
    });
  }

  enviarcz(cz: any) {
    console.log(cz);
    this.usuario.getAsigAllMR(cz).subscribe((data: any) => {
      console.log(data);
      this.asig_mr = data;
      this.cz = $('#asigcz').val();
      this.mr = $('#asigmr').val();
      this.buscarCoorTD(this.cz, this.mr);
    });
  }

  enviarmr() {
    this.cz = $('#asigcz').val();
    this.mr = $('#asigmr').val();
    this.buscarCoorTD(this.cz, this.mr);
  }

  cargarcz() {
    const intervalocz = setInterval(() => {
      this.cz = $('#asigcz').val();
      console.log(this.cz);
      clearInterval(intervalocz);
      this.enviarcz(this.cz);
    }, 1000);

    const intervalomr = setInterval(() => {
      this.mr = $('#asigmr').val();
      // // console.log(this.mr);
      clearInterval(intervalomr);
      this.buscarCoorTD(this.cz, this.mr);
    }, 1500);
  }

  buscarCoorTD(cz: any, mr: any) {
    this.countUs = this.personal.length;
    if (mr === '0') {
      mr = 'COR';
    }
    console.log(cz, mr);
    for (let x = 0; x < this.countUs; x++) {
      if (cz === this.personal[x].cz && mr === this.personal[x].mr) {
        console.log('encontrado');
        this.nombres = this.personal[x].nombres;
        this.apepaterno = this.personal[x].apepaterno;
        this.apematerno = this.personal[x].apepaterno;
        this.puesto = this.personal[x].puesto;
        this.avatar = `${this.usuario.urlavatar}${this.personal[x].avatar}`;

        this.nombres = `${this.nombres} ${this.apepaterno} ${this.apematerno}`;
        // console.log(this.nombres);
        // console.log(this.puesto);
        // console.log(this.avatar);
      }
    }
  }
}
