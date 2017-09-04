import { FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
	static formatoDecimal(control: FormControl): any {
		let exp: any = /^[0-9]+([.]{1}[0-9]+){0,1}$/
		if(control.value !== undefined && !exp.test(control.value)) {
			return {'formatoDecimal': true, 'currentValue': control.value};
		}
		return null;
	}

	static formatoDescripcion(control: FormControl): any {
		let exp: any = /^([A-Z|a-z|Á-Ú|á-ú|0-9|/|,|'|-]+[ ]?)*$/
		if (control.value !== undefined && !exp.test(control.value)) {
			return { 'formatoDescripcion': true, 'currentValue': control.value };
		}
		return null;
	}

	static formatoLetras(control: FormControl): any {
		let exp: any = /^([A-Z|a-z|Á-Ú|á-ú|.|-]+[ ]?)*$/
		if (control.value !== undefined && !exp.test(control.value)) {
			return { 'formatoLetras': true, 'currentValue': control.value };
		}
		return null;
	}

	static formatoNumeros(control: FormControl): any {
		let exp: any = /^[0-9]+$/
		if (control.value !== undefined && !exp.test(control.value)) {
			return { 'formatoNumeros': true, 'currentValue': control.value };
		}
		return null;
	}

	static formatoRFC(control: FormControl): any {
		let exp: any = /^[A-Z|a-z]{3,4}[0-9]{6}\w{3}$/
		if (control.value !== undefined && !exp.test(control.value)) {
			return { 'formatoRFC': true, 'currentValue': control.value };
		}
		return null;
	}

	static minValue(minValue: number): ValidatorFn {
		return (control: FormControl) => {
			let val: number = control.value;
			return val < minValue || val === null ? { 'minValue': true } : null;
		};
	}






















}
