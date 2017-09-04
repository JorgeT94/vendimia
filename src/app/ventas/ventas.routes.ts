/*--------------------------------------------------------------------- Modulos, Angular*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*--------------------------------------------------------------------- Componentes, Validadores*/
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormularioComponent } from './formulario/formulario.component';
/*--------------------------------------------------------------------- Clases, Modelos, Etc*/

const ROUTES: Routes = [
	{ path: '', component: CatalogoComponent },
	{ path: 'registrar', component: FormularioComponent },
];

export const VENTAS_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
