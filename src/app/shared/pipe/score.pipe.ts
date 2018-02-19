import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoremodif'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 0){
      return `- ${value*-1}`;
    }else if(value > 0){
      return `+ ${value}`;
    }else{
      return `${value}`;
    }
  }

}
