import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetalogroService {
  url: string = 'http://localhost/planeacion369/PHP/meta';
  data: any;
  year: any;
  cz: any;
  mr: any;
  programa: any;

  cargaUCNMes: boolean = false;

  constructor(public http: Http) {}


  // ###################################################################################################### \\
  // ###################################################################################################### \\
  // ########################### ♣ SECCION DE metadatos.component.ts ♣ ################################# \\
  // ###################################################################################################### \\
  // ###################################################################################################### \\

  getUcnPorMes(year: any, cz: any, mr: any, programa: any) {
    return this.http
      .post(`${this.url}/UcnPorMes.php`, {year: year, cz: cz, mr: mr, programa: programa})
      .pipe(map((res: any) =>  res.json() ));
  }

  // ###################################################################################################### \\
  // ###################################################################################################### \\
  // ########################### ♣ SECCION DE metagraficas.component.ts ♣ ################################# \\
  // ###################################################################################################### \\
  // ###################################################################################################### \\

  getTablaMeta() {
    return this.http
      .post(`${this.url}/MetasTD.php`, {
        year: this.year,
        cz: this.cz,
        mr: this.mr,
        programa: this.programa
      })
      .pipe(map(res => res.json()));
  }

  getTablaLogro() {
    return this.http
      .post(`${this.url}/LogroTD.php`, {
        year: this.year,
        cz: this.cz,
        mr: this.mr,
      })
      .pipe(map(res => res.json()));
  }
}
