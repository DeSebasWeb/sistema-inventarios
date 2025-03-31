import { Component, inject, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  idEncontrar!: number;
  producto!:Producto;
  private productoServicio = inject(ProductoService);
  buscarProducto(){
    this.productoServicio.encontrarProductoPorId(this.idEncontrar).subscribe({
      next: (productoEncontrado) =>{
        this.producto = productoEncontrado;
      },
      error: (errores: any) =>{
        console.log(errores);
      }
    });
  }
}
