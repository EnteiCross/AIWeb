import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario.interface';
import { delay, Observable, of } from 'rxjs';

interface ResponseGetUsuarios {
  data: Usuario[],
  total: number
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  usuarios = {
    data: [
      {usernumber: "12312412", username: "Arturo Solis", rol: 'Invitado'},
      {usernumber: "12312413", username: "Otro Arturo Solis", rol: 'Usuario'},
      {usernumber: "12312414", username: "Brandon Jaimes", rol: 'Administrador'},
      {usernumber: "12312415", username: "Otro Brandon Jaimes", rol: 'Autorizador'},
      {usernumber: "12312416", username: "Otro Angel Magana", rol: 'Invitado'},
      {usernumber: "12312417", username: "Angel Magana", rol: 'Usuario'},
      {usernumber: "12312418", username: "Ilse Chan", rol: 'Administrador'},
      {usernumber: "12312419", username: "Otro Ilse Chan", rol: 'Invitado'},
    ],
    total: 8
  } as ResponseGetUsuarios

  getUsuarios(page: number = 1): Observable<ResponseGetUsuarios> {
    const from = ( page -1 ) * 5;
    const to = from + 5;
    const tmpData = this.usuarios.data.slice(from,to);
    
    return of({
      data: tmpData,
      total: this.usuarios.total
    })
  }

  deleteUsuario(id: string): Observable<any> {
    console.log('aqui se eliminara y esto regresara un observable')

    return of({
      ok: true,
      message: 'Se elimino'
    }).pipe(
      delay(4000)
    )
  }
}
