import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) {

  }

  sel_usuarios(): Observable<any> {
  return this.http.get('http://localhost/planeacion369/select_usuarios.php').pipe(
      map(response => {
        console.log(response);
      })
    );
  }
}
