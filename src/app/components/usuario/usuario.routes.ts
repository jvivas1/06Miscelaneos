import { Routes } from '@angular/router';
import {UsuarioNuevoComponent} from './usuario-nuevo.component';
import {UsuarioEditarComponent} from './usuario-editar.component';
import {UsuarioDetallerComponent} from './usuario-detaller.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetallerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
