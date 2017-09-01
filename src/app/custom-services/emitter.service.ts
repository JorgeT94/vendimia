import { Injectable, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

export interface SelectedEmpresa{
	codEmpresa: number;
	nombre: string;
}

@Injectable()
export class EmitterService {
	private static _emitters: { [ID: string]: EventEmitter<any> } = {};
	private static _empresa: EventEmitter<any>;
	private static showNavbar: EventEmitter<boolean>;
	private static showProviderNavbar: EventEmitter<boolean>;

	static toggleNavbar(): EventEmitter<any> {
		if(!this.showNavbar) this.showNavbar = new EventEmitter();
		return this.showNavbar;
	}

	static toggleProviderNavbar(): EventEmitter<any> {
		if(!this.showProviderNavbar) this.showProviderNavbar = new EventEmitter();
		return this.showProviderNavbar;
	}

	static get(ID: string): EventEmitter<any> {
		// console.log('EmitterService.get ',ID);
		if(!this._emitters[ID])
			this._emitters[ID] = new EventEmitter();
		return this._emitters[ID];
	}

	static getEmpresa(empresa?): EventEmitter<any> {
		if (!this._empresa)
			this._empresa = new EventEmitter();
		this.loadSelectedEmpresa();
		return this._empresa;
	}

	private static loadSelectedEmpresa(): void {
		new Observable(observer=>{
			setTimeout(()=>{ observer.next(JSON.parse(localStorage.getItem('empresa'))); },100);
			setTimeout(()=>{ observer.complete(); },100);
		}).subscribe((value: {codEmpresa:number,nombre:string})=>{
			if(value===null) this._empresa.emit({'codEmpresa':0,'nombre':'Seleccione una empresa'});
			else this._empresa.emit(value);
		});
	}
}