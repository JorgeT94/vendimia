import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Articulo } from './articulo';

const API: string = 'https://vendimia-9d147.firebaseio.com/articulos.json';

@Injectable()
export class ArticulosService {
  private _articulos: BehaviorSubject<Articulo[]> = new BehaviorSubject<Articulo[]>([]);

  public articulos: Observable<Articulo[]> = this._articulos.asObservable();

  constructor(private _http: Http) {}

  public getArticulos() {
    return this._http.get(API).map(response=>response.json() as Articulo[]);
  }
}
