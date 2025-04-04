import { Component, inject } from '@angular/core';
import { Producto } from '../../modelos/producto/producto';
import { ProductoService } from '../../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  title = 'Editar Producto';
  producto:Producto = new Producto();
  id!: number;
  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);
  private enrutador = inject(Router);

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id']
    this.productoServicio.encontrarProductoPorId(this.id).subscribe(
      {
        next: (dato) =>{
          this.producto = dato;
        },
        error: (errores: any) =>{
          console.log(errores);
        }
      }
    );
  }

  onSubmit(){
    this.editarProducto();
  }
  editarProducto(){
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) =>{
        this.irListadoProductos();
      },
      error: (errores) =>{
        console.log(errores);
      }
    });
  }
  irListadoProductos(){
    this.enrutador.navigate(['/productos'])
  }
}
