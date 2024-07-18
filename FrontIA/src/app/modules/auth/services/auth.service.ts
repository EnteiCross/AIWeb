import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
