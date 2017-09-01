import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderByColonia'
})
export class OrderColoniaPipe implements PipeTransform {

	transform(value: any[], reverse?: boolean): any {  
		if(!value) { return value; }

		// Guardamos una copia del arreglo recibido antes de realizarle modificaciones.
		let arrayOriginal: any[] = [];
		value.forEach(x=>arrayOriginal.push(x));

		// Convierte todos los nombres a minúsculas.
		for (let i=0; i < value.length; i++) { value[i] = value[i].toLowerCase(); }

		// Ordena mediante los nombres.
		let array: any[] = value.sort((a: any, b: any): number=>{return a > b ? 1 : -1});

		// Invierte el orden del arreglo.
		if(reverse) { return array.reverse(); }

		// Regresa los nombres del arreglo a su formato original (mayúsculas, minúsculas, etc).
		for (let i=0; i < array.length; i++) {
			array[i] = arrayOriginal.find(x=>x.toLowerCase()===array[i]);
		}

		// Se regresa el arreglo ya ordenado.
		return array;
	}
}