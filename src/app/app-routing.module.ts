import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCadastrarComponent } from './menu-cadastrar/menu-cadastrar.component';
import { MenuEntrarComponent } from './menu-entrar/menu-entrar.component';

const routes: Routes = [
    {path:"" , redirectTo:" MenuEntrarComponent",pathMatch:"full"},

    {path:"entrar",component:MenuEntrarComponent},
    {path:"cadastrar",component:MenuCadastrarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
