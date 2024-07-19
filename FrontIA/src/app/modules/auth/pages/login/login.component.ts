import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importa el servicio Router
import { AuthService } from '../../services/auth.service';  // Importa el AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  usernumber: string = '';
  password: string = '';
  errorMessage: string = '';

  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}  // Inyecta el servicio Router y AuthService

  onLogin(): void {
    const trimmedUsernumber = this.usernumber.trim();
    const trimmedPassword = this.password.trim();

    const users = this.authService.getUsers();
    const user = users.find(u => u.usernumber === trimmedUsernumber && u.password === trimmedPassword);

    if (user) {
      console.log('Autenticación exitosa');
      alert('Autenticación exitosa');
      this.errorMessage = ''; // Limpiar mensaje de error en caso de éxito
      //Usar para el onLogin pasando numEmpleado y pasword validos 
      // (Será un observable en su momento con BD)
      this.authService.onLogin(trimmedUsernumber,trimmedPassword); 
      this.router.navigate(['/apps/home']);  // Navega a la página de inicio
    } else {
      this.errorMessage = 'Número de empleado o contraseña incorrecta';
    }
  }

  onInputChange(): void {
    this.errorMessage = ''; // Limpiar mensaje de error al cambiar el input
  }

  onRegister(): void {
    this.router.navigate(['/auth/register']);  // Navega a la página de registro
  }
}
