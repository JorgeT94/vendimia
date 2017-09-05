import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomValidators, SweetAlert, WindowSize } from '../../custom-class/custom-class';
import { ArticulosService } from '../../articulos/articulos.service';
import { Articulo } from '../../articulos/articulo';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private articulo: Articulo;
  private articulos: Articulo[];
  private clave: number = 0;
  private id: string;
  private campoFaltante: string = '';

  public form: FormGroup;
  public submitting: boolean = false;
  public windowSize: WindowSize;
	public windowWidth: number;

  constructor(private _fb: FormBuilder,
				      private _route: ActivatedRoute,
              private articulosService: ArticulosService,
              private _swal: SweetAlert,
              private _router: Router) {
    this.articulo = new Articulo();
    if(this._route.snapshot.url[0].path === 'registrar'){
        this.id = 'registrar';
    } else{
      this.id = this._route.snapshot.params['id'];
      this.articulosService.getArticulo(this.id).subscribe(
        articulo=>{console.log(articulo);this.articulo=articulo;this.loadData(articulo)},
        error=>console.log(error)
      );
    }
    this.articulosService.getArticulos().subscribe(
      articulos=>{
        if(articulos){
          this.articulos=this.toArray(articulos);
          if(this.id==='registrar') this.getClave();
        }
      },
      error=>console.log(error)
    );
  }

  ngOnInit() {
    this.bindForm();
    this.windowSize = new WindowSize();
		this.windowSize.width.subscribe(size=>this.windowWidth = size);
  }

  private loadData(articulo: Articulo): void {
    this.clave = articulo.idArticulo;
    this.form.get('idArticulo').setValue(articulo.idArticulo);
    this.form.get('descripcion').setValue(articulo.descripcion);
    this.form.get('modelo').setValue(articulo.modelo);
    this.form.get('precio').setValue(articulo.precio);
    this.form.get('existencia').setValue(articulo.existencia);
  }

  bindForm() {
		this.form = this._fb.group({
      'idArticulo': [0],
			'descripcion': [this.articulo.descripcion, [Validators.required]],
			'modelo': [this.articulo.modelo, []],
      'precio': [this.articulo.precio, [Validators.required,CustomValidators.formatoDecimal]],
			'existencia': [this.articulo.existencia, [Validators.required, CustomValidators.formatoNumeros]]
		});
	}

  private getClave(): void {
    this.articulos.forEach(x=>this.clave=x.idArticulo+1);
  }

  private toArray(value: any): any{
    let keys = [];
    for(let key in value) {
      keys.push(value[key]);
    }
    return keys;
  }

  private hasError(control: AbstractControl): boolean {
    if(!control.errors){ return false; }
    else{
      console.log(control);
      return true;
    }
  }

  onSubmit(): void {
    for(let control in this.form.controls){

      if(this.hasError(this.form.controls[control])){
        this._swal.warning('¡ADVERTENCIA!',`No es posible continuar, debe ingresar ${control} es obligatorio.`);
        return;
      }
    }
    this.submitting = true;
    console.log(this.id);
    if(this.id!=='registrar'){
      this.form.get('idArticulo').setValue(this.clave);
      this.articulosService.putArticulo(this.form.value, this.id).subscribe(
          value=>this._swal.success('¡Bien Hecho!','El Artículo ha sido registrado correctamente.'),
          error=>{this.submitting=false;this._swal.error(error)},
          ()=>{this._router.navigateByUrl('articulos')}
        );
    } else{
      this.form.get('idArticulo').setValue(this.clave);
      this.articulosService.postArticulo(this.form.value).subscribe(
        value=>this._swal.success('¡Bien Hecho!','El Artículo ha sido registrado correctamente.'),
        error=>{this.submitting=false;this._swal.error(error)},
        ()=>{this._router.navigateByUrl('articulos')}
      );
    }
  }

  public canDeactivate(): Promise<boolean> {
    return this._swal.confirmMsg(
      '¡ATENCIÓN!',
      'Se perderán los cambios que no hayan sido guardados, ¿desea salir?'
    ).then(res=>{
      if(res>0) return true;
      else return false;
    });
  }

  isMobileSize(): boolean {
		return this.windowWidth <= 991 ? true : false;
	}

}
