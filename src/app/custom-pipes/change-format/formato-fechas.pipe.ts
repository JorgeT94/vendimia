import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
	name: 'formatoFechas'
})
export class FormatoFechasPipe implements PipeTransform {
	constructor(private datePipe: DatePipe){}

	transform(value: any[], formato: string = 'dd-MMMM-yyyy'): any {
		for (let i=0; i < value.length; i++) {
			if (value[i].fecha) {
				value[i].fechaFormato = this.datePipe.transform(value[i].fecha,formato);	
			} else {
				value[i].fechaFormato = this.datePipe.transform(value[i].ultimaActividad,formato);
			}
			
		}
		return value;
	}
}