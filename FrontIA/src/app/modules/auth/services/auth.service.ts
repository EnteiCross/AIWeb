import { Injectable } from '@angular/core';
import { UserLogged } from '../interfaces/userLogged.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get userLogged(): UserLogged {
    // return { rol: 'Invitado'};
    // return { rol: 'Usuario'};
    // return { rol: 'Autorizador'};
    return { rol: 'Administrador'};
  }
}
