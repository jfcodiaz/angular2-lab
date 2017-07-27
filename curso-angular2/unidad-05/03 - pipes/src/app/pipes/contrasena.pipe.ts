import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean = true): string{
    return  activo ? value.replace(/./g, '*') : value;
  }

}
