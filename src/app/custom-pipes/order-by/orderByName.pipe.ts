import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderByName'
})
export class OrderNamePipe implements PipeTransform {

	transform(value: any[], expression?: any, reverse?: boolean): any {  
		if(!value) { return value; }

		// Guardamos una copia del arreglo recibido antes de realizarle modificaciones.
		let arrayOriginal: any[] = [];
		value.forEach(x=>arrayOriginal.push(x.nombre));

		// Convierte todas los nombres a minúsculas.
		for (let i=0; i < value.length; i++) { value[i].nombre = value[i].nombre.toLowerCase(); }

		// Ordena mediante los nombres.
		let array: any[] = value.sort((a: any, b: any): number=>{return a[expression] > b[expression] ? 1 : -1});

		// Invierte el orden del arreglo.
		if(reverse) { return array.reverse(); }

		// Regresa los nombres del arreglo a su formato original (mayúsculas, minúsculas, etc).
		for (let i=0; i < array.length; i++) {
			array[i].nombre = arrayOriginal.find(x=>x.toLowerCase()===array[i].nombre);
		}

		// Se regresa el arreglo ya ordenado.
		return array;
	}
}