import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
    public transform(input: string): string {
        if (!input) {
            return '';
        } else if(typeof input != "number"){            
            return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        }else{
            return input;
        }
    }

}