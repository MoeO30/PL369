import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url: string = 'http://localhost/planeacion369/PHP/';

  constructor(private http: Http) {}

  getUploadUS(UploadUS) {
    return this.http
      .post(`${this.url}usuarios/UploadUS.php`, UploadUS)
      .pipe(map((res: any) => res.json()));
  }

  getUploadMetaRegular(metaregular) {
    return this.http
      .post(`${this.url}meta/UploadMetaR.php`, metaregular)
      .pipe(map((res: any) => res.json()));
  }

  getUploadLogroRegular(logroregular) {
     return this.http
       .post(`${this.url}meta/UploadLogroR.php`, logroregular)
       .pipe(map((res: any) => res.json()));
  }
  getUploadLogroAlfa( LogroAlfa ) {
   return this.http.post(`${this.url}meta/UploadLogroAlfa.php`, LogroAlfa)
                   .pipe(map((res: any) => res.json()));
  }

  getUploadLogroPEC(LogroPEC) {
    return this.http.post(`${this.url}meta/UploadLogroPEC.php`, LogroPEC)
      .pipe(map((res: any) => res.json()));
  }


}

