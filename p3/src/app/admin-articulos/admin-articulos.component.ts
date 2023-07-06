import { Component } from '@angular/core';

interface Articulo {
  codigo: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-admin-articulos',
  templateUrl: './admin-articulos.component.html',
  styleUrls: ['./admin-articulos.component.css']
})
export class AdminArticulosComponent {
  articulos: Articulo[] = [];
  articuloSeleccionado: Articulo | null = null;
  codigo: string = '';
  descripcion: string = '';
  precio: number = 0;

  agregarArticulo() {
    const nuevoArticulo: Articulo = {
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    };
    this.articulos.push(nuevoArticulo);
    this.limpiarCampos();
  }

  borrarArticulo(index: number) {
    this.articulos.splice(index, 1);
    this.limpiarCampos();
  }

  modificarArticulo() {
    if (this.articuloSeleccionado) {
      this.articuloSeleccionado.codigo = this.codigo;
      this.articuloSeleccionado.descripcion = this.descripcion;
      this.articuloSeleccionado.precio = this.precio;
      this.limpiarCampos();
    }
  }

  seleccionarArticulo(articulo: Articulo) {
    this.articuloSeleccionado = articulo;
    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  private limpiarCampos() {
    this.articuloSeleccionado = null;
    this.codigo = '';
    this.descripcion = '';
    this.precio = 0;
  }
}
