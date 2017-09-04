/*--------------------------------------------------------------------- Modulos, Angular*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*--------------------------------------------------------------------- Componentes, Validadores*/
// import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
	// { path: 'home', component: HomeComponent, canActivate: [CanActivateAuth] },
	{ path: 'ventas', loadChildren: 'app/ventas/ventas.module#VentasModule' },
	{ path: 'configuracion', loadChildren: 'app/configuracion/configuracion.module#ConfiguracionModule' },
	// { path: ':user/cambiarcontrasena', component: NewPasswordComponent, canActivate: [CanActivateAuth], canDeactivate: [CanDeactivateForm] },
	{ path: '**', redirectTo: '' }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
