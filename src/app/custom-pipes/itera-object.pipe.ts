import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Object'
})
export class IteraObjectPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    console.log("value llega en ", value);
    if(value !== null && value !== undefined)
     return Object.keys(value); 
     else 
     return ;     
  }
}
