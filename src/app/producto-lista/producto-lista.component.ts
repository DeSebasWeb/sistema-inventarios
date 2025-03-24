import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  title = 'Sistema de inventarios';
  productos!: Producto[];
  private productoServicio = inject(ProductoService);
  ngOnInit(){
    //Cargar los productos
    this.obtenerProductos();
  }
  private obtenerProductos(): void{
    this.productoServicio.obtenerProductos().subscribe(
      {
        next: (datos) =>{
          this.productos = datos;
        },
        error: (error) =>{
          console.error("Error al obtener los productos", error);
        }
      }
    );
  }
}
