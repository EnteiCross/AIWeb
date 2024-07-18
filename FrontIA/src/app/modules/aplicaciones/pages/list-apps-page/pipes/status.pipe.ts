import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTxt',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  
  transform(value: number): string | null{
    const statusTxt: {[key:number]: string} = {
       1: 'Finalizado',
       2: 'En proceso',
       3: 'Rechazado',
       4: 'En espera'
    }

    return statusTxt[value] || null;
  }

}
