

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  errorUsuario: string = '';
  errorPassword: string = '';

  constructor(private router: Router) {}

  login() {
    // Resetear errores
    this.errorUsuario = '';
    this.errorPassword = '';


    if (!this.username.trim()) {
      this.errorUsuario = 'El usuario es obligatorio';
    }
    if (!this.password.trim()) {
      this.errorPassword = 'La contraseña es obligatoria';
    }

    if (this.errorUsuario || this.errorPassword) {
      return;
    }

   
    if (
      this.username === 'bambi' &&
      this.password === '123456'
    ) {
      alert('Login exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorPassword = 'Usuario o contraseña incorrectos';
    }
  }
}

