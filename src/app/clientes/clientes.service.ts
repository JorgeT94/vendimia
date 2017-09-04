import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cliente } from './cliente';

const API: string = 'https://vendimia-9d147.firebaseio.com/clientes.json';

@Injectable()
export class ClientesService {
  private _clientes: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>([]);

  public clientes: Observable<Cliente[]> = this._clientes.asObservable();

  constructor(private _http: Http) {}

  public getClientes() {
    return this._http.get(API).map(response=>response.json() as Cliente[]);
  }
}
