import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuCadastrarComponent } from './menu-cadastrar/menu-cadastrar.component';
import { MenuEntrarComponent } from './menu-entrar/menu-entrar.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  { path: "", redirectTo: " MenuEntrarComponent", pathMatch: "full" },

  { path: "entrar", component: MenuEntrarComponent },
  { path: "cadastrar", component: MenuCadastrarComponent },
  { path: "inicio", component: InicioComponent },
  { path: "tema", component: TemaComponent },
  { path: "tema-edit/:id", component: TemaEditComponent },
  { path: "tema-delete/:id", component: TemaDeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
