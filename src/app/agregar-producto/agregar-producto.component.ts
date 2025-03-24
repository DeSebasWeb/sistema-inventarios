import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-producto',
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  title='Crear Producto'
  producto: Producto = new Producto();

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datos) =>{
        this.irListaProductos();
      },
      error: (errores: any) =>{
        console.log(errores);
      }
    });

  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }
}
