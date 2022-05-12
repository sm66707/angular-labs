import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToox',
  pure:false,
})
export class PowerTooxPipe implements PipeTransform {

  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }

}
