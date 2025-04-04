import { Component, inject, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../modelos/producto/producto';

@Component({
  selector: 'app-mostrar-admin',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './mostrar-admin.component.html',
  styleUrl: './mostrar-admin.component.css'
})
export class MostrarAdminComponent {
  idEncontrar!: number;
  producto!:Producto;
}
