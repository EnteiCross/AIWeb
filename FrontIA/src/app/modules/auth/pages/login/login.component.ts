import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;

  // Credenciales de ejemplo para autenticación simulada
  validEmail: string = 'usuario@coppel.com';
  validPassword: string = '12345';

  onLogin(): void {
    // Convertir a minúsculas para evitar problemas de mayúsculas y minúsculas
    const trimmedEmail = this.email.trim().toLowerCase();
    const trimmedPassword = this.password.trim();

    // Debugging: Verificar valores
    console.log(`Ingresado: ${trimmedEmail}, Esperado: ${this.validEmail}`);
    console.log(`Ingresado password: ${trimmedPassword}, Esperado password: ${this.validPassword}`);

    if (trimmedEmail === this.validEmail) {
      if (trimmedPassword === this.validPassword) {
        console.log('Autenticación exitosa');
        alert('Autenticación exitosa');
        this.errorMessage = ''; // Limpiar mensaje de error en caso de éxito
      } else {
        this.errorMessage = 'Contraseña incorrecta';
      }
    } else {
      this.errorMessage = 'Usuario no registrado, intentelo nuevamente';
    }
  }

  onInputChange(): void {
    this.errorMessage = ''; // Limpiar mensaje de error al cambiar el input
  }

  onRegister(): void {
    alert('Registrar botón clicado');
    // Aquí puedes añadir la lógica de registro
  }
}
