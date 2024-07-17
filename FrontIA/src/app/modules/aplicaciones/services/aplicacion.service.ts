import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Aplication, GetAplicacionesResponse } from '../interfaces/aplicaciones.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  private data: GetAplicacionesResponse = {

    data: [
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
      {
        id:   6,
        name: '6Intranet-botonera',
        status: 'En Proceso'
      },
      {
        id:   7,
        name: '7Web App simple',
        status: 'Finalizado',
        linkDownload:  'assets/images/portada.jpeg'
      },
      {
        id:   8,
        name: '8SI.exe',
        status: 'Finalizado',
        linkDownload:  'assets/images/portada.jpeg'
      },
      {
        id:   9,
        name: '9Intranet-huellas',
        status: 'En Proceso'
      },
      {
        id:   10,
        name: '10Aplicacion prueba 2',
        status: 'En Proceso'
      },
      {
        id:   11,
        name: '11SI.exe',
        status: 'Finalizado',
        linkDownload:  'assets/images/portada.jpeg'
      },
      {
        id:   12,
        name: '12Intranet-huellas',
        status: 'En Proceso'
      },
      {
        id:   13,
        name: '13Aplicacion prueba 2',
        status: 'En Proceso'
      },
    ],
    total: 13
  } as GetAplicacionesResponse

  constructor() { }

  getAplicaciones(page: number = 1): Observable<GetAplicacionesResponse> {
    console.log(`Solicitud a pagine ${page}`);
    const from = (page -1 ) * 5;
    const to = from + 5;
    const tmpData = this.data.data.slice(from,to);
    
    return of({
      data: tmpData,
      total: this.data.total
    })
  }

  deleteAplicacion(id: string): Observable<any>{    
    // this.data = this.data.filter(app => `${app.id}` !== id)
    
    return of({
      ok: true
    }).pipe(
      delay(2000)
    )

  }
}
