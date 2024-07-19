import { Injectable } from '@angular/core';
import { UserLogged } from '../interfaces/userLogged.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: UserLogged | null = null;

  constructor() { }

  get userLogged(): UserLogged | null {
    return  this.currentUser;
  }

  onLogin(user: string, password: string) {
    // TODO: Request GET con el HTTPClient que retorna un observable con la info
    // TODO: De ser exitoso almancenar la información del usuario en currentUser

    // Este codigo solo es local [ELIMINAR CUANDO SE TENGA BD Y RESPUESTA]
    this.currentUser = {  
      username:   'Penta Cero Miedo',
      usernumber: '99872123',
      token:      'esteesuntokencomodequeno',
      rol:        'Invitado'
      // rol: 'Usuario',
      // rol: 'Autorizador',
      // rol: 'Administrador'
    };
  }

  onLogout(): void {
    //TODO: Limpiar al usuario segun sea necesario
    this.currentUser = null;
  }

  register(usernumber: string, username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      if (users.find((user: any) => user.usernumber === usernumber)) {
        reject(new Error('El número de empleado ya está registrado'));
      } else {
        users.push({ usernumber, username, password });
        localStorage.setItem('users', JSON.stringify(users));
        resolve();
      }
    });
  }

  getUsers(): { usernumber: string, username: string, password: string }[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
}
