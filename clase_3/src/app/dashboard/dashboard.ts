import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs';

interface Post {
  id: number;
  usuario: string;
  texto: string;
  likes: number;
  comentarios: string[];
  imagenUrl: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTabsModule, FormsModule],
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.css']
})
export class dashboard implements OnInit {  

  publicaciones: Post[] = [];
  comentariosNuevos: { [key: number]: string } = {}; 

  usuario = { 
    nombre: 'Bambi', 
    edad: '3 años',
    fotoUrl: 'imagenperro.jpg'
  };

  publicacionActiva: Post | null = null;

  ngOnInit() {
    this.publicaciones = [
      { id: 1, usuario: 'MAX',
        texto: 'Mi gato está adorable hoy',
        likes: 2, 
        comentarios: ['Sí, muy lindo!'],
        imagenUrl: 'gato.jpg' },

      { id: 2,
         usuario: 'BRUNO', 
         texto: 'Mi perro Rocky aprendió un truco', 
         likes: 5, 
         comentarios: ['¡Qué genial!', 'Enséñame!'], 
         imagenUrl: 'imagenperro.jpg' },
      { id: 3, 
        usuario: 'KIRA',
         texto: 'me gusta jugar con la pelota',
          likes: 3, 
          comentarios: ['Hermosa foto!', 'Qué lindo lugar'],
           imagenUrl: 'perro2.jpg' },
      { id: 4, usuario: 'MILO', 
        texto: 'foto random', 
        likes: 1, 
        comentarios: ['que chistoso'],
         imagenUrl: 'perro3.jpg' }
    ];
  }

  darLike(post: Post) {
    post.likes++;
  }

  verDetalle(post: Post) {
    this.publicacionActiva = post;
  }

  agregarComentario(post: Post) {
    const texto = this.comentariosNuevos[post.id];
    if (texto && texto.trim() !== '') {
      post.comentarios.push(texto.trim());
      this.comentariosNuevos[post.id] = '';
    }
  }
}
