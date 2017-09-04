import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuracion } from './configuracion';

const API: string = 'https://vendimia-9d147.firebaseio.com/configuraciones';

@Injectable()
export class ConfiguracionService {

  constructor(private _http: Http) {}

  public getConfiguraciones() {
    return this._http.get(`${API}.json`).map(response=>response.json() as Configuracion);
  }

  public postConfiguraciones(configuraciones: Configuracion) {
    let body = JSON.stringify( configuraciones );
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(`${API}.json`, configuraciones, {headers}).map(response=>response.json());
  }

  public putConfiguraciones(configuraciones: Configuracion, key$: string) {
    let body = JSON.stringify( configuraciones );
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${API}/${key$}.json`;
    return this._http.put(url, configuraciones, {headers}).map(response=>response.json());
  }

}
