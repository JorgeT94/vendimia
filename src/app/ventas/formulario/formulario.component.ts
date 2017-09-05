import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ClientesService } from '../../clientes/clientes.service';
import { Cliente } from '../../clientes/cliente';
import { ArticulosService } from '../../articulos/articulos.service';
import { Articulo } from '../../articulos/articulo';
import { ConfiguracionService } from '../../configuracion/configuracion.service';
import { Configuracion } from '../../configuracion/configuracion';
import { SweetAlert } from '../../custom-class/custom-class';
import { Venta } from '../venta';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private venta: Venta;
  private clients: Cliente[];
  private articles: Articulo[];
  private configs: Configuracion;
  private addedArticles: Articulo[] = [];
  private clientsModel: any;
  private articlesModel: any;
  private importeTotal: number = 0;

  public submitting: boolean = false;

  searchClients = (text$: Observable<string>)=>{
    return text$.debounceTime(200).map(term=>term.length<3 ? [] : this.clients.filter(v=>{
      if(v){
        return v.nombre.toLowerCase().indexOf(term.toLowerCase())>-1 ||
               v.apellidoP.toLowerCase().indexOf(term.toLowerCase())>-1 ||
               v.apellidoM.toLowerCase().indexOf(term.toLowerCase())>-1
      }
    }).slice(0, 10));
  };

  searchArticles = (text$: Observable<string>)=>{
    return text$.debounceTime(200).map(term=>term.length<3 ? [] : this.articles.filter(v=>{
      if(v){
        return v.descripcion.toLowerCase().indexOf(term.toLowerCase())>-1
      }
    }).slice(0, 10));
  };

  clientsFormatter = (x: Cliente) => `${x.codCliente} - ${x.nombre} ${x.apellidoP} ${x.apellidoM}`;

  articlesFormatter = (x: Articulo) => `${x.descripcion}`;

  constructor(private clientesService: ClientesService,
              private articulosService: ArticulosService,
              private configService: ConfiguracionService,
              private _swal: SweetAlert) {
    this.clientesService.getClientes().subscribe(
      clientes=>{this.clients=this.toArray(clientes)},
      error=>console.log(error)
    );

    this.articulosService.getArticulos().subscribe(
      articulos=>{this.articles=this.toArray(articulos)},
      error=>console.log(error)
    );

    this.configs = new Configuracion();
    this.configService.getConfiguraciones().subscribe(
      config=>this.getConfigs(config),
      error=>console.log(error)
    )
  }

  ngOnInit() {
  }

  getConfigs(config): void {
    for(let key in config){
      this.configs.tasa = config[key].tasa;
      this.configs.enganche = config[key].enganche;
      this.configs.plazo = config[key].plazo;
    }
  }

  calcularImporteTotal(): void {
    let num: number = 0;
    for(let a of this.addedArticles) {
      num += this.calcularPrecio(a) * (a.cantidad ? a.cantidad : 1);
    }
    this.importeTotal = num;
  }

  calcularPrecio(articulo: Articulo): number {
    return articulo.precio * (1+(this.configs.tasa*this.configs.plazo)/100);
  }

  calcularImporte(articulo: Articulo): number {
    this.calcularImporteTotal();
    return this.calcularPrecio(articulo) * (articulo.cantidad ? articulo.cantidad : 1);
  }

  addNewArticle(articulo: Articulo): void {
    if(!articulo || !articulo.idArticulo) return;

    if(articulo.existencia<1){
      this._swal.warning('¡Advertencia!','El artículo seleccionado no cuenta con existencia, favor de verificar');
      return;
    }
    this.addedArticles.push(articulo);
    this.articlesModel = null;
    setTimeout(()=>{
      document.getElementById('cantidad'+(this.addedArticles.length-1)).focus();
      (<HTMLInputElement>document.getElementById('cantidad'+(this.addedArticles.length-1))).value = '1';
    },200)
  }

  removeArticle(idx: number): void {
    this.addedArticles.splice(idx,1);
  }

  calcularEnganche(): number {
    return (this.configs.enganche/100) * this.importeTotal;
  }

  calcularBonificacion(): number {
    return this.calcularEnganche() * ((this.configs.tasa * this.configs.plazo)/100);
  }

  selected(): boolean {
    if(this.clientsModel){
      if(this.clientsModel.codCliente) return true;
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

  canDeactivate(): Promise<boolean> {
    return this._swal.confirmMsg(
      '¡ATENCIÓN!',
      'Se perderán los cambios que no hayan sido guardados, ¿desea salir?'
    ).then(res=>{
      if(res>0) return true;
      else return false;
    });
  }

}
