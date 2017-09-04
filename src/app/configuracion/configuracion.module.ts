import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,BrowserXhr } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ConfiguracionComponent } from './configuracion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CONFIGURACION_ROUTING } from './configuracion.routes';
import { SweetAlert } from '../custom-class/sweet-alert';
import { CanDeactivateForm } from './can-deactivate';
import { ConfiguracionService } from './configuracion.service';

@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		CONFIGURACION_ROUTING,
		HttpModule,
		CustomPipesModule
	],
  providers: [
    SweetAlert,
    ConfiguracionService,
    CanDeactivateForm
  ],
  declarations: [ConfiguracionComponent, FormularioComponent]
})
export class ConfiguracionModule { }
