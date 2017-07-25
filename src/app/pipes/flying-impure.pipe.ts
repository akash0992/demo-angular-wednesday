import { Pipe, PipeTransform } from '@angular/core';
import { FlyingPipe } from './flying.pipe';

@Pipe({
  name: 'flyingImpure',
  pure: false
})
export class FlyingImpurePipe extends FlyingPipe {}
