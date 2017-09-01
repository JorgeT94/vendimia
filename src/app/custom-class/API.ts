import { environment } from '../../environments/environment'

export class API {
    private production:boolean;
    public ruta:string='';

    constructor() {
        this.production = environment.production
        this.production ? this.ruta = 'http://172.19.0.88/serv/api/':
        this.ruta = 'http://localhost:89/apidifarmer/api/';        
    } 
}         