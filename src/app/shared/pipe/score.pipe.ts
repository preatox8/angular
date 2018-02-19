import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoremodif'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `+ ${value}`;
  }

}
