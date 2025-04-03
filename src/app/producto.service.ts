import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase: string = "http://localhost:8080/inventario-app/productos";
  private clienteHttp = inject(HttpClient);

  obtenerProductos(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(`${this.urlBase}/mostrar`);
  }
  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(`${this.urlBase}/agregar`, producto);
  }

  encontrarProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/id/${id}`);
  }
  editarProducto(id: number, producto: Producto){
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }
  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/eliminar/${id}`);
  }
  constructor() {}
}
