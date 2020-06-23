import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService{
  getListar(){
    return[
     {"nombre": "no se que verg", "edad":45,  "pais":"hacer ayuda porfa"},
     ]
  }

}
