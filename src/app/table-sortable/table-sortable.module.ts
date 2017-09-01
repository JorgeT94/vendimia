/*--------------------------------------------------------------------- Modulos, Angular*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
/*--------------------------------------------------------------------- Componentes, Validadores*/
import { TableSortableComponent } from './table-sortable.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		NgbModule.forRoot(),
		NgxPaginationModule,
		CustomPipesModule,
	],
	exports: [
		TableSortableComponent
	],
	declarations: [
		TableSortableComponent
	]
})
export class TableSortableModule { }
