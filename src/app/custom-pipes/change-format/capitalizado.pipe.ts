import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name:'capitalizado'
})
    export class CapitalizadoPipe implements PipeTransform{
        transform(value: string, cadaPalabra:boolean = true, variable:string=""):string{
            
            value!=undefined ? value = value.toLowerCase():0;                                    
            let nombres = value.split(" ");
            console.log('NMBRE',nombres);
            if(variable != undefined)            
            if(cadaPalabra && variable.toLowerCase()!='rfc'){                
                for(let i in nombres){
                    console.log(nombres);
                    if(nombres[i] != "")
                    nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                    
                }
            }else if(variable.toLowerCase()=='rfc'){                
                for(let i in nombres){
                    nombres[i] = nombres[i].toUpperCase();
                }
            }
            
            return nombres.join(" ");
    }
}















/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

    transform(value: string[], propiedades: string[]) {
        console.log('value desde el pipe', value);
        console.log('valor de propiedades', propiedades);

        for (let i in value) {
            for (let j in propiedades) {
                let propiedad = propiedades[j]["variable"];
                let valor;
                console.log('VALOR PROPIEDAD', propiedad);
                propiedad !== null ? valor = propiedad.toLowerCase() : valor = "";
                if (propiedad.toLowerCase() == 'rfc') {
                    for (let columna in value) {
                        let nombres = value[columna][propiedad].split(" ");
                        console.log('VALORES REALES', value[columna][propiedad]);
                        for (var nombre in nombres) {
                            nombres[nombre][0] !== undefined ? nombres[nombre] = nombres[nombre][0].toUpperCase() + nombres[nombre].substr(1) : nombres[nombre] = "";
                            console.log('RESULT',nombres);
                            
                        }
                    }                                        
                }
            }
        }
    }
}*/