import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-public',
  imports: [  MatCardModule, MatButtonModule],
  templateUrl: './public.html',
  styleUrl: './public.css'
})
export class Public {
 mascota = {
    nombre: 'moana 🐱',
    especie: 'perro',
    edad: 2,
    ciudad: 'Bogotá',
    foto: 'imagenperro.jpg'
  };

}
