import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CanDeactivateForm } from './can-deactivate';

const ROUTES: Routes = [
	{ path: '', component: CatalogoComponent },
	{ path: 'registrar', component: FormularioComponent, canDeactivate: [CanDeactivateForm] },
];

export const VENTAS_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
