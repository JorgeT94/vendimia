import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CanDeactivateForm } from './can-deactivate';

const ROUTES: Routes = [
	{ path: '', component: FormularioComponent, canDeactivate: [CanDeactivateForm]},
];

export const CONFIGURACION_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
