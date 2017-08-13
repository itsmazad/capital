import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusSign'
})
export class AppPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
