import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { SobreNosComponent } from './views/sobre-nos/sobre-nos.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: 'sobre_nos',
    component: SobreNosComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
