import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Venta } from './venta';

const API: string = 'https://vendimia-9d147.firebaseio.com/ventas.json';

@Injectable()
export class VentasService {

	constructor(private _http: Http) {}

  public getVentas() {
		return this._http.get(API).map(response=>response.json() as Venta[]);
	}

	public postVenta(venta: Venta) {
		let body = JSON.stringify( venta );
    let headers = new Headers({'Content-Type': 'application/json'});
		return this._http.post(API, body, { headers }).map(res=>{
			return res.json();
		});
	}
}
