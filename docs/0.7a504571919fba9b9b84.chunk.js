webpackJsonp([0],{"+DK7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/oeL"),o=n("qbdv"),r=n("bm2B"),a=n("CPp0"),c=n("0WLp"),s=n("Uaeb"),l=n("0p9h"),u=n("2BGN"),d=n("Ns/i"),f=n("jezc"),p=n("+ebz"),h=n("DCiS"),v=n("tVHb"),b=n("1Gqf"),g=n("x0EG");n.d(e,"VentasModule",function(){return y});var m=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},y=function(){function t(){}return t}();y=m([n.i(i.b)({imports:[o.a,r.a,r.b,c.a.forRoot(),v.a,a.b,p.a],providers:[b.a,l.a,u.a,d.a,h.a,f.a],declarations:[s.a,g.a]})],y)},"0p9h":function(t,e,n){"use strict";var i=n("/oeL"),o=n("CPp0"),r=n("5v8a"),a=(n.n(r),n("xpf9"));n.n(a);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l="https://vendimia-9d147.firebaseio.com/ventas.json",u=function(){function t(t){this._http=t}return t.prototype.getVentas=function(){return this._http.get(l).map(function(t){return t.json()})},t.prototype.postVenta=function(t){var e=JSON.stringify(t),n=new o.d({"Content-Type":"application/json"});return this._http.post(l,e,{headers:n}).map(function(t){return t.json()})},t}();u=c([n.i(i.d)(),s("design:paramtypes",["function"==typeof(d=void 0!==o.e&&o.e)&&d||Object])],u);var d},"2BGN":function(t,e,n){"use strict";var i=n("/oeL"),o=n("CPp0"),r=n("Dqrr"),a=(n.n(r),n("5v8a")),c=(n.n(a),n("xpf9"));n.n(c);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this._http=t,this._clientes=new r.BehaviorSubject([]),this.clientes=this._clientes.asObservable()}return t.prototype.getClientes=function(){return this._http.get("https://vendimia-9d147.firebaseio.com/clientes.json").map(function(t){return t.json()})},t}();u=s([n.i(i.d)(),l("design:paramtypes",["function"==typeof(d=void 0!==o.e&&o.e)&&d||Object])],u);var d},"7OMA":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this.idVenta=0}return t}()},DCiS:function(t,e,n){"use strict";var i=n("/oeL"),o=n("BkNc"),r=n("1Gqf");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.router=t,this._swal=e}return t.prototype.canDeactivate=function(t,e,n,i){var o=this;return!!t.submitting||t.canDeactivate().then(function(t){return!!t||(o.router.navigate([n.url]),!1)})},t}();s=a([n.i(i.d)(),c("design:paramtypes",["function"==typeof(l=void 0!==o.b&&o.b)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],s);var l,u},H7An:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"i{cursor:pointer}i.fa-plus-square{font-size:2.7em}button,input[type=submit]{cursor:pointer}#addedArticles,#cantidadesTotales{border-top:1px solid #000}#rfc{color:gray;font-size:1.5em}",""]),t.exports=t.exports.toString()},"L/3J":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},"Ns/i":function(t,e,n){"use strict";var i=n("/oeL"),o=n("CPp0"),r=n("5v8a"),a=(n.n(r),n("xpf9"));n.n(a);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l="https://vendimia-9d147.firebaseio.com/articulos",u=function(){function t(t){this._http=t}return t.prototype.getArticulos=function(){return this._http.get(l+".json").map(function(t){return t.json()})},t.prototype.getArticulo=function(t){var e=l+"/"+t+".json";return this._http.get(e).map(function(t){return t.json()})},t.prototype.postArticulo=function(t){var e=(JSON.stringify(t),new o.d({"Content-Type":"application/json"}));return this._http.post(l+".json",t,{headers:e}).map(function(t){return t.json()})},t.prototype.putArticulo=function(t,e){var n=JSON.stringify(t),i=new o.d({"Content-Type":"application/json"}),r=l+"/"+e+".json";return this._http.put(r,n,{headers:i}).map(function(t){return t.json()})},t}();u=c([n.i(i.d)(),s("design:paramtypes",["function"==typeof(d=void 0!==o.e&&o.e)&&d||Object])],u);var d},Uaeb:function(t,e,n){"use strict";var i=n("/oeL"),o=n("0p9h"),r=n("ydrT");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ventasService=t}return t.prototype.ngOnInit=function(){var t=this;this.ventasService.getVentas().subscribe(function(e){return t.ventas=e}),this.windowSize=new r.a,this.windowSize.width.subscribe(function(e){return t.windowWidth=e})},t.prototype.isMobileSize=function(){return this.windowWidth<=425},t.prototype.isTabletSize=function(){return this.windowWidth<=768},t}();s=a([n.i(i.e)({selector:"app-catalogo",template:n("r7qa"),styles:[n("Vk4Y")]}),c("design:paramtypes",["function"==typeof(l=void 0!==o.a&&o.a)&&l||Object])],s);var l},Vk4Y:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".contenedor>section{margin-bottom:5px}.derecha{text-align:right}.fa.fa-search{color:#000}.focused{color:#87cefa!important}.izquierda{float:left}.inner-addon{position:relative}.inner-addon .fa{padding:10px 8.5px;pointer-events:none;position:absolute}.left-addon input{padding-left:26px}.left-inner-addon input{padding-left:30px}.left-addon .fa{left:4px}.searchFocused{padding-left:34px!important}button[type=button]{border-radius:50px}input{margin-right:60px}input[type=text]{width:20px;transition:width .5s ease-in-out;border-radius:100px}input[type=text]:focus{width:170px}@media screen and (max-width:425px){.buscar{margin-bottom:5px}.btnNuevo{display:none}.fa.fa-search,.fuenteSmartphone{font-size:.8em}input[type=text]{font-size:.7em}input[type=text]:focus{width:100px}.left-addon input{padding-left:20px}.inner-addon .fa{padding:10px 7px;pointer-events:none;position:absolute}.searchFocused{padding-left:28px!important}}@media screen and (max-width:375px){.fuenteSmartphone{font-size:.75em}}@media screen and (max-width:320px){.fuenteSmartphone{font-size:.7em}}",""]),t.exports=t.exports.toString()},YXPZ:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t.formatoDecimal=function(t){var e=/^[0-9]+([.]{1}[0-9]+){0,1}$/;return void 0===t.value||e.test(t.value)?null:{formatoDecimal:!0,currentValue:t.value}},t.formatoDescripcion=function(t){var e=/^([A-Z|a-z|Á-Ú|á-ú|0-9|\/|,|'|-]+[ ]?)*$/;return void 0===t.value||e.test(t.value)?null:{formatoDescripcion:!0,currentValue:t.value}},t.formatoLetras=function(t){var e=/^([A-Z|a-z|Á-Ú|á-ú|.|-]+[ ]?)*$/;return void 0===t.value||e.test(t.value)?null:{formatoLetras:!0,currentValue:t.value}},t.formatoNumeros=function(t){var e=/^[0-9]+$/;return void 0===t.value||e.test(t.value)?null:{formatoNumeros:!0,currentValue:t.value}},t.formatoRFC=function(t){var e=/^[A-Z|a-z]{3,4}[0-9]{6}\w{3}$/;return void 0===t.value||e.test(t.value)?null:{formatoRFC:!0,currentValue:t.value}},t.minValue=function(t){return function(e){var n=e.value;return n<t||null===n?{minValue:!0}:null}},t}()},b2r2:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this.idArticulo=0,this.cantidad=1}return t}()},jezc:function(t,e,n){"use strict";var i=n("/oeL"),o=n("CPp0"),r=n("5v8a"),a=(n.n(r),n("xpf9"));n.n(a);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l="https://vendimia-9d147.firebaseio.com/configuraciones",u=function(){function t(t){this._http=t}return t.prototype.getConfiguraciones=function(){return this._http.get(l+".json").map(function(t){return t.json()})},t.prototype.postConfiguraciones=function(t){var e=(JSON.stringify(t),new o.d({"Content-Type":"application/json"}));return this._http.post(l+".json",t,{headers:e}).map(function(t){return t.json()})},t.prototype.putConfiguraciones=function(t,e){var n=(JSON.stringify(t),new o.d({"Content-Type":"application/json"})),i=l+"/"+e+".json";return this._http.put(i,t,{headers:n}).map(function(t){return t.json()})},t}();u=c([n.i(i.d)(),s("design:paramtypes",["function"==typeof(d=void 0!==o.e&&o.e)&&d||Object])],u);var d},nqsH:function(t,e){t.exports='<section class="contenedor mt-4">\n\n  <div class="card bg-primary mb-3" style="max-width: 100%;">\n    <div class="card-header text-white">Registro de Ventas</div>\n    <div class="card-body bg-light inline-block">\n      <h6 class="card-title text-success text-right">Folio Venta: {{ folio }}</h6>\n      <form (submit)="onSubmit()">\n        <section class="container">\n          <div class="row">\n            <div class="input-group w-50">\n              <ng-template #rt let-r="result">{{ r.nombre+\' \'+r.apellidoP+\' \'+r.apellidoM }}</ng-template>\n              <span class="badge badge-primary px-3 pt-2" style="width:80px;">Cliente</span>\n              <input type="text" class="form-control" [(ngModel)]="clientsModel" [ngModelOptions]="{standalone: true}" [ngbTypeahead]="searchClients" [resultTemplate]="rt" [inputFormatter]="clientsFormatter" placeholder="Buscar cliente...">\n            </div>\n            <div class="w-50 pl-3" *ngIf="selected()">\n              <span id="rfc">RFC: {{ clientsModel.rfc }}</span>\n            </div>\n          </div>\n          <hr class="bg-primary">\n          <div class="row">\n            <div class="input-group w-50">\n              <ng-template #rta let-r="result">{{ r.descripcion }}</ng-template>\n              <span class="badge badge-primary px-3 pt-2" style="width:80px;">Artículo</span>\n              <input type="text" class="form-control" [(ngModel)]="articlesModel" [ngModelOptions]="{standalone: true}" [ngbTypeahead]="searchArticles" [resultTemplate]="rta" [inputFormatter]="articlesFormatter" placeholder="Buscar Artículo...">\n            </div>\n            <div class="w-50 pl-3">\n              <i class="fa fa-plus-square" (click)="addNewArticle(articlesModel)"></i>\n            </div>\n          </div>\n          <article id="addedArticles" class="table-responsive mt-3">\n            <table class="table table-hover table-sm">\n        \t\t\t<thead>\n        \t\t\t\t<tr>\n        \t\t\t\t\t<th>Descripción Artículo</th>\n        \t\t\t\t\t<th>Modelo</th>\n        \t\t\t\t\t<th>Cantidad</th>\n        \t\t\t\t\t<th>Precio</th>\n        \t\t\t\t\t<th>Importe</th>\n                  <th></th>\n        \t\t\t\t</tr>\n        \t\t\t</thead>\n        \t\t\t<tbody>\n        \t\t\t\t<tr *ngFor="let a of (addedArticles | keys); let i=index">\n        \t\t\t\t\t<td>{{ addedArticles[a].descripcion }}</td>\n        \t\t\t\t\t<td>{{ addedArticles[a].modelo }}</td>\n        \t\t\t\t\t<td>\n                    <input [id]="\'cantidad\'+i" type="number" class="form-control" [(ngModel)]="addedArticles[a].cantidad" [ngModelOptions]="{standalone: true}" autofocus [value]="addedArticles[a].cantidad" [max]="addedArticles[a].existencia" min="1">\n                  </td>\n                  <td>{{ calcularPrecio(addedArticles[a]) | currency:\'MXN\':true }}</td>\n                  <td>{{ calcularImporte(addedArticles[a]) | currency:\'MXN\':true }}</td>\n        \t\t\t\t\t<td>\n                    <i class="fa fa-times text-danger" (click)="removeArticle(i)"></i>\n                  </td>\n        \t\t\t\t</tr>\n        \t\t\t</tbody>\n        \t\t</table>\n          </article>\n          <article id="cantidadesTotales" *ngIf="addedArticles.length>0" class="text-right">\n            <span class="badge badge-secondary">Enganche: {{ calcularEnganche() | currency:\'MXN\':true }}</span>\n            <br>\n            <span class="badge badge-secondary">Bonificación Enganche: {{ calcularBonificacion().toFixed(2) | currency:\'MXN\':true }}</span>\n            <br>\n            <span class="badge badge-secondary">Total: {{ (importeTotal - calcularEnganche() - calcularBonificacion()).toFixed(2) | currency:\'MXN\':true }}</span>\n          </article>\n        </section>\n      </form>\n      <section *ngIf="nextSection" id="abonosMensuales">\n        <article class="table-responsive">\n          <table class="table table-hover table-sm">\n            <thead class="bg-secondary">\n              <th colspan="5" class="text-center text-white"><strong>ABONOS MENSUALES</strong></th>\n            </thead>\n            <tbody>\n              <tr *ngFor="let p of plazos">\n                <td>{{ p }} ABONOS DE</td>\n                <td>{{ calcularTotalAPagar(p) / p | currency:\'MXN\':true }}</td>\n                <td>TOTAL A PAGAR {{ calcularTotalAPagar(p) | currency:\'MXN\':true }}</td>\n                <td>SE AHORRA {{ (importeTotal - calcularEnganche() - calcularBonificacion()) - calcularTotalAPagar(p) | currency:\'MXN\':true }}</td>\n                <td>\n                  <label class="custom-control custom-radio">\n                    <input [(ngModel)]="abono" name="abono" type="radio" class="custom-control-input" [value]="p">\n                    <span class="custom-control-indicator"></span>\n                    <span class="custom-control-description"></span>\n                  </label>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </article>\n      </section>\n    </div>\n  </div>\n\n  <div class="text-right">\n    <button type="button" class="btn btn-success mr-3" [routerLink]="[\'../\']">Cancelar</button>\n    <button *ngIf="!nextSection" type="button" class="btn btn-success" (click)="next()">Siguiente</button>\n    <button *ngIf="nextSection" type="button" class="btn btn-success" (click)="onSubmit()">Guardar</button>\n  </div>\n</section>\n\n<br><br>\n'},r54y:function(t,e,n){"use strict";var i=n("Dqrr");n.n(i);n.d(e,"a",function(){return o});var o=function(){function t(){var t=r();this.width=t.pluck("width").distinctUntilChanged(),this.height=t.pluck("height").distinctUntilChanged()}return t}(),r=function(){return i.Observable.fromEvent(window,"resize").map(a).startWith(a()).publishReplay(1).refCount()},a=function(){return{height:window.innerHeight,width:window.innerWidth}}},r7qa:function(t,e){t.exports='<section class="encabezado animated fadeIn">\n\t<br>\n\t<strong><h5>Ventas Activas</h5></strong>\n\t<hr>\n</section>\n<section class="contenedor animated fadeIn fast">\n\t<section style="margin-bottom: 5px;">\n\t\t<article class="derecha">\n\t\t\t<button type="button" class="btn btn-primary" [ngClass]="{\'btn-sm\': isMobileSize()}" routerLink="registrar">\n\t\t\t\t<i class="fa fa-plus fa-lg" aria-hidden="true"></i>\n\t\t\t\t<span class="btnNuevo">Nueva Venta</span>\n\t\t\t</button>\n\t\t</article>\n\t</section>\n\t<article class="table-responsive">\n\t\t<table class="table table-hover table-sm">\n\t\t\t<thead class="btn-primary disabled">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Folio Venta</th>\n\t\t\t\t\t<th>Clave Cliente</th>\n\t\t\t\t\t<th>Nombre</th>\n\t\t\t\t\t<th>Total</th>\n\t\t\t\t\t<th>Fecha</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor="let v of (ventas | keys); let i=index">\n\t\t\t\t\t<th scope="row">{{ ventas[v].idVenta }}</th>\n\t\t\t\t\t<td>{{ ventas[v].codCliente }}</td>\n\t\t\t\t\t<td>{{ ventas[v].nombre }}</td>\n\t\t\t\t\t<td>{{ ventas[v].total | currency:\'MXN\':true }}</td>\n\t\t\t\t\t<td>{{ ventas[v].fecha | date:\'shortDate\' }}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</article>\n</section>\n'},tVHb:function(t,e,n){"use strict";var i=n("BkNc"),o=n("Uaeb"),r=n("x0EG"),a=n("DCiS");n.d(e,"a",function(){return s});var c=[{path:"",component:o.a},{path:"registrar",component:r.a,canDeactivate:[a.a]}],s=i.c.forChild(c)},x0EG:function(t,e,n){"use strict";var i=n("/oeL"),o=n("BkNc"),r=n("5v8a"),a=(n.n(r),n("azLz")),c=(n.n(a),n("MBEm")),s=(n.n(c),n("0p9h")),l=n("7OMA"),u=n("2BGN"),d=n("Ns/i"),f=n("b2r2"),p=n("jezc"),h=n("L/3J"),v=n("ydrT");n.d(e,"a",function(){return m});var b=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(t,e,n,i,o,r){var a=this;this.ventasService=t,this.clientesService=e,this.articulosService=n,this.configService=i,this._swal=o,this._router=r,this.addedArticles=[],this.folio=0,this.importeTotal=0,this.nextSection=!1,this.plazos=[3,6,9,12],this.submitting=!1,this.searchClients=function(t){return t.debounceTime(200).map(function(t){return t.length<3?[]:a.clients.filter(function(e){if(e)return e.nombre.toLowerCase().indexOf(t.toLowerCase())>-1||e.apellidoP.toLowerCase().indexOf(t.toLowerCase())>-1||e.apellidoM.toLowerCase().indexOf(t.toLowerCase())>-1}).slice(0,10)})},this.searchArticles=function(t){return t.debounceTime(200).map(function(t){return t.length<3?[]:a.articles.filter(function(e){if(e)return e.descripcion.toLowerCase().indexOf(t.toLowerCase())>-1}).slice(0,10)})},this.clientsFormatter=function(t){return t.codCliente+" - "+t.nombre+" "+t.apellidoP+" "+t.apellidoM},this.articlesFormatter=function(t){return""+t.descripcion},this.venta=new l.a,this.ventasService.getVentas().subscribe(function(t){t&&(a.ventas=a.toArray(t),a.getFolio())},function(t){return console.log(t)}),this.clientesService.getClientes().subscribe(function(t){a.clients=a.toArray(t)},function(t){return console.log(t)}),this.articulosService.getArticulos().subscribe(function(t){a.articles=a.toArray(t)},function(t){return console.log(t)}),this.configs=new h.a,this.configService.getConfiguraciones().subscribe(function(t){return a.getConfigs(t)},function(t){return console.log(t)})}return t.prototype.ngOnInit=function(){},t.prototype.getFolio=function(){var t=this;this.ventas.forEach(function(e){return t.folio=e.idVenta+1})},t.prototype.getConfigs=function(t){for(var e in t)this.configs.tasa=t[e].tasa,this.configs.enganche=t[e].enganche,this.configs.plazo=t[e].plazo},t.prototype.calcularImporteTotal=function(){for(var t=0,e=0,n=this.addedArticles;e<n.length;e++){var i=n[e];t+=this.calcularPrecio(i)*(i.cantidad?i.cantidad:1)}this.importeTotal=t},t.prototype.calcularPrecio=function(t){return t.precio*(1+this.configs.tasa*this.configs.plazo/100)},t.prototype.calcularImporte=function(t){return this.calcularImporteTotal(),this.calcularPrecio(t)*(t.cantidad?t.cantidad:1)},t.prototype.calcularPrecioContado=function(){return(this.importeTotal-this.calcularEnganche()-this.calcularBonificacion())/(1+this.configs.tasa*this.configs.plazo/100)},t.prototype.calcularTotalAPagar=function(t){return this.calcularPrecioContado()*(1+this.configs.tasa*t/100)},t.prototype.addNewArticle=function(t){var e=this;if(t&&t.idArticulo){if(t.existencia<1)return void this._swal.warning("¡Advertencia!","El artículo seleccionado no cuenta con existencia, favor de verificar");this.addedArticles.push(t),this.articlesModel=null,setTimeout(function(){document.getElementById("cantidad"+(e.addedArticles.length-1)).focus(),document.getElementById("cantidad"+(e.addedArticles.length-1)).value="1"},200)}},t.prototype.removeArticle=function(t){this.addedArticles.splice(t,1)},t.prototype.calcularEnganche=function(){return this.configs.enganche/100*this.importeTotal},t.prototype.calcularBonificacion=function(){return this.calcularEnganche()*(this.configs.tasa*this.configs.plazo/100)},t.prototype.selected=function(){return!!this.clientsModel&&!!this.clientsModel.codCliente},t.prototype.toArray=function(t){var e=[];for(var n in t)e.push(t[n]);return e},t.prototype.next=function(){for(var t=!0,e=0,n=this.addedArticles;e<n.length;e++){n[e].cantidad<1&&(t=!1)}this.clientsModel&&this.clientsModel.codCliente&&this.addedArticles.length>0&&t?this.nextSection=!0:this._swal.error("Los datos ingresados no son correctos, favor de verificar")},t.prototype.reducirStock=function(t){for(var e in t)for(var n=0,i=this.addedArticles;n<i.length;n++){var o=i[n];if(t[e].idArticulo==o.idArticulo){var r=new f.a;r.idArticulo=o.idArticulo,r.descripcion=o.descripcion,r.modelo=o.modelo,r.precio=o.precio,r.existencia=o.existencia-o.cantidad,this.articulosService.putArticulo(r,e).subscribe(function(t){return console.log(t)})}}},t.prototype.onSubmit=function(){var t=this;if(this.abono){console.log(this.folio);for(var e=!0,n=0,i=this.addedArticles;n<i.length;n++){i[n].cantidad<1&&(e=!1)}this.clientsModel&&this.clientsModel.codCliente&&this.addedArticles.length>0&&e?(this.submitting=!0,this.venta.idVenta=this.folio,this.venta.codCliente=this.clientsModel.codCliente,this.venta.nombre=this.clientsModel.nombre+" "+this.clientsModel.apellidoP+" "+this.clientsModel.apellidoM,this.venta.fecha=new Date,this.venta.total=this.calcularTotalAPagar(this.abono),this.venta.abono=this.abono,this.venta.estatus="C",this.articulosService.getArticulos().subscribe(function(e){e&&t.reducirStock(e)},function(t){return console.log(t)},function(){t.ventasService.postVenta(t.venta).subscribe(function(e){return t._swal.success("¡Bien Hecho!","Tu venta ha sido registrada correctamente.")},function(e){t.submitting=!1,console.log(e)},function(){t._router.navigateByUrl("ventas")})})):this._swal.error("Los datos ingresados no son correctos, favor de verificar")}else this._swal.warning("¡ATENCIÓN!","Debe seleccionar un plazo para realizar el pago de su compra.")},t.prototype.canDeactivate=function(){return this._swal.confirmMsg("¡ATENCIÓN!","Se perderán los cambios que no hayan sido guardados, ¿desea salir?").then(function(t){return t>0})},t}();m=b([n.i(i.e)({selector:"app-formulario",template:n("nqsH"),styles:[n("H7An")]}),g("design:paramtypes",["function"==typeof(y=void 0!==s.a&&s.a)&&y||Object,"function"==typeof(x=void 0!==u.a&&u.a)&&x||Object,"function"==typeof(w=void 0!==d.a&&d.a)&&w||Object,"function"==typeof(j=void 0!==p.a&&p.a)&&j||Object,"function"==typeof(A=void 0!==v.c&&v.c)&&A||Object,"function"==typeof(O=void 0!==o.b&&o.b)&&O||Object])],m);var y,x,w,j,A,O},ydrT:function(t,e,n){"use strict";var i=n("1Gqf");n.d(e,"c",function(){return i.a});var o=n("r54y");n.d(e,"a",function(){return o.a});var r=n("YXPZ");n.d(e,"b",function(){return r.a})}});