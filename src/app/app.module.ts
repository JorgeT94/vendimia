import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule,BrowserXhr } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CustomPipesModule } from './custom-pipes/custom-pipes.module';
import { TableSortableModule } from './table-sortable/table-sortable.module';
import { NgProgressModule } from 'ngx-progressbar';
import { EmitterService } from './custom-services/emitter.service';
import { NgProgressBrowserXhr } from 'ngx-progressbar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { SweetAlert } from './custom-class/sweet-alert';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		JsonpModule,
		HttpModule,
		CustomPipesModule,
		TableSortableModule,
		NgbModule.forRoot(),
		APP_ROUTING,
		NgProgressModule
	],
  providers: [
		{ provide: LOCALE_ID, useValue:"es-MX" },
		SweetAlert,
		NavbarComponent,
		EmitterService,
		{ provide: BrowserXhr, useClass: NgProgressBrowserXhr }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
