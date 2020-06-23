import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AutorComponent } from './interes.component';
import{ HipotecaComponent } from './hipoteca/hipoteca.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
