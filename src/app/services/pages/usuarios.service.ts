import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService  {
  id: any;
  nombreus: string;
  ap_pat: string;
  ap_mat: string;
  czus: string;
  mrus: string;
  deptous: string;
  nivel: string;
  status: string;
  dPuesto: string;
  rfc: string;
  avatar: string;
  avatarlogin: string;
  urlavatar: string = '../assets/dist/img/';
  countTotal: number = 0;
  countAdmin: number = 0;
  countTD: number = 0;
  countJD: number = 0;
  countER: number = 0;
  countDel: number = 0;
  countCZ: number = 0;
  countSesiones: number = 0;
  cambioTable: boolean = false;

  btnEliminar: boolean = false;
  btnEditar: boolean = false;
  editar: boolean = false;
  progressbar: number = 0;
  StartProgresss: boolean = true;

  rfcpass: string;
  // titulos de profileimage.component.html
  asignacion_CZ = 'Asignacion';
  departamento_MR = 'Departamento';
  // tslint:disable-next-line:no-inferrable-types
  url: string = 'http://localhost/planeacion369/PHP/usuarios';

  MenuDataBase: any = [{
    modulo: 'USUARIOS',
    submenu: [
      {titulo: 'USUARIOS',
        id_file: 'file-es',
        file: 'file-es[]',
        textfile: 'UpJsonUs',
      },
    ],
  },
  ];


  constructor(private http: Http) {
    this.avatarlogin = `${this.urlavatar}tesla.jpg`;
  }

  sel_usuarios() {
    return this.http
      .get(`${this.url}/select_usuarios.php`)
      .pipe(map(res => res.json()));
  }

  public buscarus(ids: string) {
    this.id = ids;
  }

  getNivelesSelect() {
    return this.http
      .get(`${this.url}/select_niveles.php`)
      .pipe(map(res => res.json()));
  }

  getusuario(ids: string) {
    console.log(ids);
    return this.http
      .post(`${this.url}/selectone.php/`, { id: ids })
      .pipe(map(res => res.json()));
  }

  getPuestos() {
    return this.http
      .get(`${this.url}/select_puestos.php`)
      .pipe(map(res => res.json()));
  }

  getAsigCZ(desPuesto: string) {
     console.log(desPuesto);
      return this.http
        .post(`${this.url}/select_asig_cz.php`, { id: desPuesto })
        .pipe(map(res => res.json()));
          // return this.http
          //   .post(`${this.url}/select_asig_cz.php`, { id: desPuesto })
          //   .pipe(map((res: any) => {
          //     console.log(res);
          //   }));
  }

  getAsigAllCZ() {
    return this.http.get(`${this.url}/select_asig_cz_all.php`)
                    .pipe(map(res => res.json()));
  }
  getAsigAllMR(coor: any) {
    return this.http
      .post(`${this.url}/select_dep_mr_all.php`, { cz: coor })
      .pipe(map(res => res.json()));
  }

  getAsigMR(desCZ) {
    console.log('seleccionando zona', desCZ);
    return this.http
      .post(`${this.url}/select_dep_mr.php`, { id: desCZ, tipo: this.dPuesto })
      .pipe(map(res => res.json()));
  }

  addUsuario(Formulario) {
    console.log(Formulario);
    return this.http
      .post(`${this.url}/insertUS.php`, Formulario)
      .pipe(map((res: any) => res.json()));
  }

  getEliminarUsuario(ids: string) {
    return this.http
      .post(`${this.url}/deleteUs.php`, { id: ids })
      .pipe(map((res: any) => res.json()));
  }

  getUpdateUsuario(Formulario) {
    return this.http.post(`${this.url}/update.php`, Formulario).pipe(
      map((data: any) => {
        console.log(data);
      })
    );
  }

  getUpdateStatus(ids: string, status: string) {
    return this.http
      .post(`${this.url}/updateStatus.php`, { id: ids, status: status })
      .pipe(
        map((data: any) => {
          console.log(data);
        })
      );
  }
  getresetpass(ids: string) {
    return this.http
      .post(`${this.url}/resetpass.php`, { id: ids, rfc: this.rfc })
      .pipe(
        map((data: any) => {
          console.log(data);
        })
      );
  }

  getUploadUS(UploadUS) {
    // console.log(UploadUS);
  return this.http
    .post(`${this.url}/UploadUS.php`, UploadUS)
    .pipe(map((res: any) => res.json()));

      // return this.http.post(`${this.url}/UploadUS.php`, UploadUS)
      //   .pipe(map((res: any) => {
      //     console.log(res);
      // }));
  }
}
