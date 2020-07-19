import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const endpoint = environment.URL_SERVER_API;
const endpointUser = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(`${endpoint}${endpointUser}?per_page=6`)
      .pipe(
        map(response => {
          return response['data'];
        })
      );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${endpoint}${endpointUser}/${id}`)
      .pipe(
        map(response => {
          return response['data'];
        })
      );
  }
}
