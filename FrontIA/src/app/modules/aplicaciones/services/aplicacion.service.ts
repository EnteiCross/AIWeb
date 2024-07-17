import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Aplication } from '../interfaces/aplicaciones.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  private data: Aplication[] = [
    {
      id:   1,
      name: 'Intranet-botonera',
      status: 'En Proceso'
    },
    {
      id:   2,
      name: 'Web App simple',
      status: 'Finalizado',
      linkDownload:  'assets/images/portada.jpeg'
    },
    {
      id:   3,
      name: 'SI.exe',
      status: 'Finalizado',
      linkDownload:  'assets/images/portada.jpeg'
    },
    {
      id:   4,
      name: 'Intranet-huellas',
      status: 'En Proceso'
    },
    {
      id:   5,
      name: 'Aplicacion prueba 2',
      status: 'En Proceso'
    },
  ] as Aplication[]

  constructor() { }

  getAplicaciones(): Observable<Aplication[]> {
    //TODO: peticion http para traer apps
    //TODO: peticiones por paginacion

    return of(this.data)
  }

  deleteAplicacion(id: string): Observable<any>{    
    this.data = this.data.filter(app => `${app.id}` !== id)
    
    return of({
      ok: true
    }).pipe(
      delay(2000)
    )

  }
}
