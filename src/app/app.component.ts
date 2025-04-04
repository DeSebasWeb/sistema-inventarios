import { Component, inject, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Producto } from './modelos/producto/producto';
import { ProductoService } from './servicios/producto.service';
import { MostrarAdminComponent } from "./componentes/mostrar-admin/mostrar-admin.component";
import { SignInComponent } from "./componentes/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule, MostrarAdminComponent, SignInComponent],
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
