import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,BrowserXhr } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VentasService } from './ventas.service';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { TableSortableModule } from '../table-sortable/table-sortable.module';
// import { EmitterService } from './custom-services/emitter.service';
import { VENTAS_ROUTING } from './ventas.routes';
import { SweetAlert } from '../custom-class/sweet-alert';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		VENTAS_ROUTING,
		HttpModule,
		CustomPipesModule,
		TableSortableModule,
	],
  providers: [
    SweetAlert,
    VentasService
  ],
  declarations: [CatalogoComponent, FormularioComponent]
})
export class VentasModule { }
