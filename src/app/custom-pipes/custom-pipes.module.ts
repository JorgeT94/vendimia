import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CustomPipesComponent } from './custom-pipes.component';
import { ReversePipe } from './reverse.pipe';
import { IteraObjectPipe } from './itera-object.pipe';
import { OrderByPipe, OrderColoniaPipe, OrderDescriptionPipe, OrderNamePipe } from './order-by/orderby';
import { CapitalizadoPipe, FormatoFechasPipe, TelefonoPipe, TitleCasePipe, IsNan } from './change-format/change-format';

@NgModule({
	imports: [CommonModule],
	providers: [DatePipe],
	exports: [
		ReversePipe,
		IteraObjectPipe,
		OrderByPipe,
		OrderColoniaPipe,
		OrderDescriptionPipe,
		OrderNamePipe,
		CapitalizadoPipe,
		FormatoFechasPipe,
		TelefonoPipe,
		TitleCasePipe,
		IsNan
	],
	declarations: [
		CustomPipesComponent,
		ReversePipe,
		IteraObjectPipe,
		OrderByPipe,
		OrderColoniaPipe,
		OrderDescriptionPipe,
		OrderNamePipe,
		CapitalizadoPipe,
		FormatoFechasPipe,
		TelefonoPipe,
		TitleCasePipe,
		IsNan
	]
})
export class CustomPipesModule { }
