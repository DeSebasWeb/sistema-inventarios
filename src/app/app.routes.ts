import { Routes } from '@angular/router';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';

export const routes: Routes = [
  {path: 'registro', component: SignInComponent},
  {path: 'productos', component: ProductoListaComponent},
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  {path: 'agregar-producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent}
];

