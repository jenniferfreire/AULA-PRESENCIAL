import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { SobreNosComponent } from './views/sobre-nos/sobre-nos.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContatoComponent } from './views/contato/contato.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SobreNosComponent,
    ProdutosComponent,
    ContatoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
