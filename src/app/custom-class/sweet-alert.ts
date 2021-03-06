declare var swal: any;

export class SweetAlert {

	constructor() {}

	private static msg(titulo: string, msg: string, timer: number = 0, tipo: string = null, showConfirmButton:boolean=true, allowOutsideClick:boolean=true, allowEscapeKey:boolean=true): void{
		swal({
			title: titulo,
			text: msg,
			timer: timer,
			type: tipo,
			showConfirmButton:showConfirmButton,
			allowOutsideClick:allowOutsideClick,
			allowEscapeKey:allowEscapeKey
		}).then(
			function(){},
			function(dismiss){
				if(dismiss == 'timer' || dismiss == 'cancel'){
					//
				}
			}
		);
	}

	alert(titulo: string, msg: string, timer: number = 0): void{
		SweetAlert.msg(titulo, msg, timer, null);
	}

	question(titulo: string, msg: string, timer: number = 0): void{
		SweetAlert.msg(titulo, msg, timer,'question');
	}

	success(titulo: string, msg: string, timer: number = 0): any{
		SweetAlert.msg(titulo, msg, timer, 'success');
	}

	danger(titulo: string, msg: string, timer: number = 0): void{
		SweetAlert.msg(titulo, msg, timer, 'error');
	}

	error(msg: string): void{
		SweetAlert.msg(
			'¡ERROR!',
			`
				No se pudo realizar la acción correctamente.
				${msg}
			`,
			0,
			'error'
		);
	}

	warning(titulo: string, msg: string, timer: number = 0): void{
		SweetAlert.msg(titulo, msg, timer, 'warning');
	}

	info(titulo: string, msg: string, timer: number = 0,showConfirmButton?:boolean, AllowOutsideClick?:boolean, allowEscapeKey?:boolean): void{
		SweetAlert.msg(titulo, msg, timer, 'info',showConfirmButton, AllowOutsideClick, allowEscapeKey);
	}

	confirmMsg(titulo: string, msg: string, confirmBtnTxt: string = 'Aceptar', cancelBtnTxt: string = 'Cancelar', tipo: string = null): Promise<number>{
		return Promise.resolve(swal({
			title: titulo,
			text: msg,
			type: 'warning',
			showCloseButton: true,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: confirmBtnTxt,
			cancelButtonText: cancelBtnTxt,
			showLoaderOnConfirm: true
		}).then(
			response=>response === 'dismiss' ? false : true,
			dismiss=>dismiss === 'close' ? -1 : 0
		).then(response=>{
			return Promise.resolve(response);
		}));
	}

	inputMsg(titulo: string): Promise<string>{
		return Promise.resolve(swal({
			title: titulo,
			input: 'text',
			//showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
			showLoaderOnConfirm: true,
			allowOutsideClick: false,
			preConfirm: function(msg){
				return new Promise(function(resolve, reject){
					setTimeout(()=>{
						if(msg===''){
							reject('No puede dejar el campo vacío')
						} else{
							resolve(msg)
						}
					}, 800)
				})
			}
		}));
	}


	multipleInputMsg(titulo: string): Promise<string>{
		return Promise.resolve(swal({
			title: titulo,
			/* input: 'text', */
			html:
			'<input id="swal-input1" class="swal2-input" placeholder="Nueva contraseña">' +
			'<input id="swal-input2" class="swal2-input" placeholder="Confirmar nueva contraseña">',
			//showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
			showLoaderOnConfirm: true,
			allowOutsideClick: false,
			preConfirm: function(msg){
				return new Promise(function(resolve, reject){
					setTimeout(()=>{
						if(msg===''){
							reject('No puede dejar el campo vacío')
						} else{
							resolve(msg)
						}
					}, 800)
				})
			}
		}));
	}
}
