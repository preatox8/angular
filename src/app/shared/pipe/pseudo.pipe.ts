import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(value: Collegue[], arg1: string): Collegue[] {
    console.log(value, arg1);
    if(arg1 != ""){
      return value.filter(c => c.pseudo.startsWith(arg1));
    }
    return value;
  }

}
