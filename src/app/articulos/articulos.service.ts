import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Articulo } from './articulo';

const API: string = 'https://vendimia-9d147.firebaseio.com/articulos';

@Injectable()
export class ArticulosService {

  constructor(private _http: Http) {}

  public getArticulos() {
    return this._http.get(`${API}.json`).map(response=>response.json() as Articulo[]);
  }

  public getArticulo(key$: string) {
    let url = `${API}/${key$}.json`;
    return this._http.get(url).map(res=>res.json());
  }

  public postArticulo(articulo: Articulo) {
    let body = JSON.stringify( articulo );
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(`${API}.json`, articulo, {headers}).map(response=>response.json());
  }

  public putArticulo(articulo: Articulo, key$: string) {
    let body = JSON.stringify( articulo );
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${API}/${key$}.json`;
    return this._http.put(url, body, {headers}).map(response=>response.json());
  }
}
