import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  idEncontrar!: number;
  buscarProducto(){

  }
}
