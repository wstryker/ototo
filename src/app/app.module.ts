import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutorComponent } from "./interes.component";
import { HipotecaComponent } from './hipoteca/hipoteca.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';


@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    HipotecaComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
