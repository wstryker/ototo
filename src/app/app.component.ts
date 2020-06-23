import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoService } from './interes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  nombre = 'Angel Aquije';
  edad = 19;


  frmdatos = new FormGroup({
    txtnombre: new FormControl('', Validators.required),
    txtedad: new FormControl('22', Validators.max(65)),
    cbodistrito: new FormControl('', Validators.required)
});

mostrar(e){
  var nom = this.frmdatos.get("txtnombre").value;
  if (nom != ""){
    alert("El valor de  es: " + nom);
    this.frmdatos.controls.txtnombre.disable();
    this.frmdatos.controls.txtedad.disable();
    this.frmdatos.controls.cbodistrito.disable();
  }
  else{
    alert("Complete el valor");
  }
}

activar(e){
  this.frmdatos.controls.txtnombre.enable();
  this.frmdatos.controls.txtedad.enable();
  this.frmdatos.controls.cbodistrito.enable();

  this.frmdatos.controls.txtnombre.setValue("");
  this.frmdatos.controls.txtedad.setValue("19");
  this.frmdatos.controls.cbodistrito.setValue("Chorrillos");

}
usuario = {
  nombre: "",
  edad: 25,
  distrito: "Chorrillos"
}

lista: string[] = ["Lima","Surco","Chorrillos","Miraflores","SMJ"];

autor: any[];

constructor(private as: AutoService){
  this.autor = as.getListar();
}
}
