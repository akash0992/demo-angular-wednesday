import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../config/flyer';

@Pipe({
  name: 'flying'
})
export class FlyingPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(allFlyers: Flyer[]) {
    return allFlyers.filter(hero => hero.canFly);
  }

}
