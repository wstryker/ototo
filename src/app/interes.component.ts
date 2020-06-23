import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component ({
  selector:"interes",
  templateUrl: "./interes.component.html",
  styleUrls: ["./interes.component.css"]
})

export class AutorComponent{
  Nombre = "Mario Vargas Llosa";
  Pais = "Peru";

  // Inyeccion de dependencias
  constructor (private ruta: Router){ }

  abrir_libro(e){
    this.ruta.navigate(['/hipoteca'])
  }

}
