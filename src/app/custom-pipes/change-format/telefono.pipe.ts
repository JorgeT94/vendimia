import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let p = value.substring(0,1);
		let s = value.substring(1,2);
		if(p==5 || p==3 || p==8) {
			if(p==8 && s==1) {
				return `(81)${value.substring(2,6)}-${value.substring(6)}`;
			} else if(p==s && p!==8) {
				return `(${p}${s})${value.substring(2,6)}-${value.substring(6)}`;
			}
		}
		return `(${value.substring(0,3)})${value.substring(3,6)}-${value.substring(6)}`;
	}
}