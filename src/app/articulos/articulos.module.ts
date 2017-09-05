import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,BrowserXhr } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ArticulosService } from './articulos.service';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { CanDeactivateForm } from './can-deactivate';
import { ARTICULOS_ROUTING } from './articulos.routes';
import { SweetAlert } from '../custom-class/sweet-alert';

@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		ARTICULOS_ROUTING,
		HttpModule,
		CustomPipesModule
	],
  providers: [
    SweetAlert,
    ArticulosService,
    CanDeactivateForm
  ],
  declarations: [
    ArticulosComponent,
    CatalogoComponent,
    FormularioComponent
  ]
})
export class ArticulosModule { }
