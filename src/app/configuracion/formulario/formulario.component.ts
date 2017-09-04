import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators, SweetAlert, WindowSize } from '../../custom-class/custom-class';
import { ConfiguracionService } from '../configuracion.service';
import { Configuracion } from '../configuracion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  private configuracion: Configuracion;
  private newConfigs: boolean;
  private key: string;

  public form: FormGroup;
  public submitting: boolean = false;
  public windowSize: WindowSize;
	public windowWidth: number;

  constructor(private _fb: FormBuilder,
				      private _route: ActivatedRoute,
				      private _router: Router,
				      private _swal: SweetAlert,
              private configService: ConfiguracionService) {
    this.configuracion = new Configuracion();
    this.configService.getConfiguraciones().subscribe(
      config=>{console.log(config)
        if(config){
          this.getConfigValues(config);
        } else{
          this.newConfigs = true;
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

  bindForm() {
		this.form = this._fb.group({
			'tasa': [this.configuracion.tasa, [CustomValidators.formatoDecimal]],
			'enganche': [this.configuracion.enganche, [CustomValidators.formatoNumeros]],
			'plazo': [this.configuracion.plazo, [CustomValidators.formatoNumeros]],
		});
	}

  getConfigValues(obj: any): void{
    for(let key in obj) {
      this.key = key;
      this.configuracion.enganche = obj[key].enganche ? obj[key].enganche : null;
      this.configuracion.plazo = obj[key].plazo ? obj[key].plazo : null;
      this.configuracion.tasa = obj[key].tasa ? obj[key].tasa : null;
    }
    this.form.get('tasa').setValue(this.configuracion.tasa);
    this.form.get('enganche').setValue(this.configuracion.enganche);
    this.form.get('plazo').setValue(this.configuracion.plazo);
  }

  hasError(control: AbstractControl): boolean {
    if(control.errors && !control.value){ return false; }
    else if(!control.errors){ return false; }
    else{ return true; }
  }

  onSubmit(): void {
    for(let control in this.form.controls){
      if(this.hasError(this.form.controls[control])){
        this._swal.warning('¡ADVERTENCIA!', 'Alguno de los campos tienen valores incorrectos, favor de revisarlos.');
        return;
      }
    }
    this.submitting = true;
    if(this.newConfigs){
      this.configService.postConfiguraciones(this.form.value).subscribe(
        value=>this._swal.success('¡Bien Hecho!','La configuración ha sido registrada.'),
        error=>{this.submitting=false;this._swal.error(error)},
        ()=>{this.submitting=false;this._router.navigateByUrl('')}
      );
    } else{
      this.configService.putConfiguraciones(this.form.value, this.key).subscribe(
        value=>this._swal.success('¡Bien Hecho!','La configuración ha sido registrada.'),
        error=>{this.submitting=false;this._swal.error(error)},
        ()=>{this.submitting=false;this._router.navigateByUrl('')}
      );
    }
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

  isMobileSize(): boolean {
		return this.windowWidth <= 991 ? true : false;
	}
}
