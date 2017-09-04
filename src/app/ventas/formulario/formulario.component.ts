import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ClientesService } from '../../clientes/clientes.service';
import { Cliente } from '../../clientes/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private clients: Cliente[];
  private model: any;

  search = (text$: Observable<string>)=>{
    return text$.debounceTime(200).map(term=>term.length<3 ? [] : this.clients.filter(v=>{
      if(v){
        return v.nombre.toLowerCase().indexOf(term.toLowerCase())>-1 ||
               v.apellidoP.toLowerCase().indexOf(term.toLowerCase())>-1 ||
               v.apellidoM.toLowerCase().indexOf(term.toLowerCase())>-1
      }
    }).slice(0, 10));
  };

  formatter = (x: Cliente) => `${x.codCliente} - ${x.nombre} ${x.apellidoP} ${x.apellidoM}`;

  constructor(private clientesService: ClientesService) {
    this.clientesService.getClientes().subscribe(
      clientes=>{this.clients=this.toArray(clientes)},
      error=>console.log(error)
    );
  }

  ngOnInit() {
  }

  selected(): boolean {
    if(this.model){
      if(this.model.codCliente) return true;
      else return false;
    } else{
      return false;
    }
  }

  toArray(value: any): any{
    let keys = [];
    for(let key in value) {
      keys.push(value[key]);
    }
    console.log(keys);
    return keys;
  }

  onSubmit(): void {

  }

}
