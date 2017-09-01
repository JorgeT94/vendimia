/**.................................................................... Modulos, Angular.*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**.................................................................... Pipes, Servicios.*/
/*import { OrderByPipe } from '../custom-pipes/order-by/order-by.pipe';*/
import { OrderByPipe } from '../custom-pipes/order-by/orderby';
/**.................................................................... Clases, Modelos, Etc.*/
import { WindowSize } from '../custom-class/custom-class';

const MILLISECONDS_PER_DAY: number = 1000 * 60 * 60 * 24;

@Component({
	selector: 'table-sortable',
	templateUrl: './table-sortable.component.html',
	styleUrls: ['./table-sortable.component.css']
})
export class TableSortableComponent implements OnInit {
	@Input() columns: any[];
	@Input() data: any[];
	@Input() sort: any;
	@Input() options: any[];
	@Input() optionEspecial: any[];
	@Input() design: any;
	@Input() permiso: string;
	@Input() Buscador: string;

	@Output() onDelete = new EventEmitter();
	@Output() onDetails = new EventEmitter();
	@Output() onEdit = new EventEmitter();
	@Output() onDetailsEspecial = new EventEmitter();
	@Output() onEnable = new EventEmitter();
	@Output() onUnlock = new EventEmitter();

	private currentPage: number = 1;
	private pageSize: number = 8;
	private maxSize: number = 4;

	public windowSize: WindowSize;
	public windowWidth: number;

	constructor() { }

	ngOnInit() {
		this.windowSize = new WindowSize();
		this.windowSize.width.subscribe((size) => this.windowWidth = size);
	}

	selectedClass(columnName): any {
		return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
	}

	calculateTimer(fila): number {
		// console.log(fila);
		if (this.hasTimer() && this.hasDate()) {
			let todayDate = new Date();
			let creationDate = new Date(fila[this.hasDate().variable]);
			// console.log('creationDate',creationDate);
			let finishedDate = new Date(creationDate);
			finishedDate.setDate(finishedDate.getDate() + fila[this.hasTimer().variable]);
			// console.log('finishedDate',finishedDate);
			if (finishedDate < todayDate) {
				return 0;
			} else {
				let remainingDays: number;
				let utc1 = Date.UTC(finishedDate.getFullYear(), finishedDate.getMonth(), finishedDate.getDate());
				let utc2 = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
				// console.log('plazo',fila[this.hasTimer().variable]);
				// console.log(Math.round((utc1 - utc2)/MILLISECONDS_PER_DAY));
				remainingDays = Math.round((utc1 - utc2) / MILLISECONDS_PER_DAY);
				return remainingDays;
			}
		} else {
			return 60;
		}
	}

	classIcon(optionEspecial): any {
		return 'fa fa-' + optionEspecial.faIcon;
	}

	classBtn(optionEspecial): any {
		return 'btn btn-sm btn-' + optionEspecial.color;
	}

	changeSorting(columnName): void {
		let sort = this.sort;
		if (sort.column == columnName) {
			sort.descending = !sort.descending;
		} else {
			sort.column = columnName;
			sort.descending = false;
		}
	}

	convertSorting(): string {
		return this.sort.descending ? '-' + this.sort.column : this.sort.column;
	}

	details(obj: any): void {
		this.onDetails.emit(obj);
	}

	delete(obj: any): void {
		this.onDelete.emit(obj);
	}

	detailsEspecial(obj: any): void {
		this.onDetailsEspecial.emit(obj);
	}

	edit(obj: any): void {
		this.onEdit.emit(obj);
	}

	enable(obj: any): void {
		this.onEnable.emit(obj);
	}

	hasDate(): any {
		if (this.columns) {
			return this.columns.find(x => x.isDate);
		}
	}

	hasTimer(): any {
		if (this.columns) {
			return this.columns.find(x => x.timer);
		}
	}

	unlock(obj: any): void {
		this.onUnlock.emit(obj);
	}
	/**.................................................................... Screen sizes (Responsive).*/
	isMobileSize(): boolean {
		return this.windowWidth <= 425 ? true : false;
	}

	isTabletSize(): boolean {
		return this.windowWidth <= 768 && this.windowWidth > 425 ? true : false;
	}

}
