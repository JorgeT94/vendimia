import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
	{ path: 'ventas', loadChildren: 'app/ventas/ventas.module#VentasModule' },
	{ path: 'articulos', loadChildren: 'app/articulos/articulos.module#ArticulosModule' },
	{ path: 'configuracion', loadChildren: 'app/configuracion/configuracion.module#ConfiguracionModule' },
	{ path: '**', redirectTo: '' }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
