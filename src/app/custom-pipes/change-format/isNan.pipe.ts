import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Pipe({
	name: 'isNan'
})
export class IsNan implements PipeTransform {
	transform(value: any): any {
    return value = isNaN(value) || value == 'undefined' ? '0' :  value;
    }
}