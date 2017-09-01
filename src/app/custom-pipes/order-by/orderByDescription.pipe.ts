import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderByDescription'
})
export class OrderDescriptionPipe implements PipeTransform {

	transform(value: any[], expression?: any, reverse?: boolean): any {  
		if(!value) { return value; }

		// Guardamos una copia del arreglo recibido antes de realizarle modificaciones.
		let arrayOriginal: any[] = [];
		value.forEach(x=>arrayOriginal.push(x.descripcion));

		// Convierte todas las descripciones a minúsculas.
		for (let i=0; i < value.length; i++) { value[i].descripcion = value[i].descripcion.toLowerCase(); }

		// Ordena mediante las descripciones.
		let array: any[] = value.sort((a: any, b: any): number=>{return a[expression] > b[expression] ? 1 : -1});

		// Invierte el orden del arreglo.
		if(reverse) { return array.reverse(); }

		// Regresa las descripciones del arreglo a su formato original (mayúsculas, minúsculas, etc).
		for (let i=0; i < array.length; i++) {
			array[i].descripcion = arrayOriginal.find(x=>x.toLowerCase()===array[i].descripcion);
		}

		// Se regresa el arreglo ya ordenado.
		return array;
	}
}