import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuCadastrarComponent } from './menu-cadastrar/menu-cadastrar.component';
import { MenuEntrarComponent } from './menu-entrar/menu-entrar.component';

const routes: Routes = [
  { path: "", redirectTo: " MenuEntrarComponent", pathMatch: "full" },

  { path: "entrar", component: MenuEntrarComponent },
  { path: "cadastrar", component: MenuCadastrarComponent },
  { path: "inicio", component: InicioComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
