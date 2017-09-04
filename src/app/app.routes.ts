/*--------------------------------------------------------------------- Modulos, Angular*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*--------------------------------------------------------------------- Componentes, Validadores*/
// import { HomeComponent } from './home/home.component';
/*--------------------------------------------------------------------- Clases, Modelos, Etc*/
// import { CanDeactivateForm } from './new-password/can-deactivate-form';
// import { CanActivateAuth, CanActivateProviderAuth, CanDeactivateProviders, CanLoadUser } from './custom-class/custom-class';

const ROUTES: Routes = [
	// { path: 'home', component: HomeComponent, canActivate: [CanActivateAuth] },
	{ path: 'ventas', loadChildren: 'app/ventas/ventas.module#VentasModule'},
	// { path: 'bancos', loadChildren: 'app/bancos/bancos.module#BancosModule', canActivate: [CanActivateAuth] },
	// { path: ':user/cambiarcontrasena', component: NewPasswordComponent, canActivate: [CanActivateAuth], canDeactivate: [CanDeactivateForm] },
	{ path: '**', redirectTo: '' }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
