import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { SweetAlert } from '../custom-class/sweet-alert';

@Injectable()
export class CanDeactivateForm implements CanDeactivate<FormularioComponent>{

	constructor(private router: Router, private _swal: SweetAlert){}

	canDeactivate(component: FormularioComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot): any{
		if(component.submitting){ return true; }
		let can = component.canDeactivate();
		return can.then(val=>{
			if(!val){
				this.router.navigate([state.url]);
				return false;
			}
			return true;
		});
	}
}
