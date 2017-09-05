import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticulosService } from '../articulos.service';
import { Articulo } from '../articulo';
import { WindowSize } from '../../custom-class/custom-class';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private articulos: Articulo[];

  public windowSize: WindowSize;
  public windowWidth: number;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.getArticulos().subscribe(articulos=>this.articulos = articulos);
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
