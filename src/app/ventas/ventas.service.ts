import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Venta } from './venta';

const API: string = 'https://vendimia-9d147.firebaseio.com/ventas.json';

@Injectable()
export class VentasService {
	private _ventas: BehaviorSubject<Venta[]> = new BehaviorSubject<Venta[]>([]);

	public ventas: Observable<Venta[]> = this._ventas.asObservable();

	constructor(private _http: Http) {}

  public getVentas(): void {
		this._http.get(API).map(response=>response.json() as Venta[]).subscribe(
			ventas=>{console.log(ventas);this._ventas.next(ventas)},
			error=>console.log(`Error: ${error}`)
		);
	}

  public getVentas2() {
		return this._http.get(API).map(response=>response.json() as Venta[]);
	}

	// public getUsuarioProveedor(id: number): Observable<UsuarioProveedor> {
	// 	if(this.authService.isTokenValid()){
	// 		return this._http.get(`${API_URL}/${String(id)}`, this.makeOptions()).map((res:Response)=>{
	// 			this.changeToken(res.json().tokenId);
	// 			console.log('getUsuarioProveedor()',res.json().data[0]);
	// 			return res.json().data[0] as UsuarioProveedor
	// 		});
	// 	} else{
	// 		console.log('OH YEAH');
	// 		this._loginService.logout(401);
	// 	}
	// }

	// public postUsuarioProveedor(usuario: UsuarioProveedor): Observable<UsuarioProveedor> {
	// 	if(this.authService.isTokenValid()){
	// 		return this._http.post(API_URL, usuario, this.makeOptions()).map((res:Response)=>{
	// 			this.changeToken(res.json().tokenId);
	// 			return res.json().data as UsuarioProveedor
	// 		});
	// 	} else{
	// 		console.log('OH YEAH');
	// 		this._loginService.logout(401);
	// 	}
	// }
  //
	// public putUsuarioProveedor(usuario: any): Observable<any> {
	// 	if(this.authService.isTokenValid()){
	// 		return this._http.put(API_URL, usuario, this.makeOptions()).map((res:Response)=>{
	// 			this.changeToken(res.json().tokenId);
	// 			return res.json()
	// 		});
	// 	} else{
	// 		console.log('OH YEAH');
	// 		this._loginService.logout(401);
	// 	}
	// }
  //
	// }
}
