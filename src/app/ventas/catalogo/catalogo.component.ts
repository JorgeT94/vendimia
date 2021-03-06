import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VentasService } from '../ventas.service';
import { Venta } from '../venta';
import { WindowSize } from '../../custom-class/custom-class';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private ventas: Venta[];

  public windowSize: WindowSize;
  public windowWidth: number;

  constructor(private ventasService: VentasService) {}

  ngOnInit() {
    this.ventasService.getVentas().subscribe(ventas=>this.ventas = ventas);
    this.windowSize = new WindowSize();
		this.windowSize.width.subscribe(size=>this.windowWidth=size);
  }

	isMobileSize(): boolean {
		return this.windowWidth <= 425 ? true : false;
	}

	isTabletSize(): boolean {
		return this.windowWidth <= 768 ? true : false;
	}
}
