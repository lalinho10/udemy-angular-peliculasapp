import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( image: any ): any {
    if ( image ) {
        return `http://image.tmdb.org/t/p/w200/${image}`;
    } else {
        return './assets/img/noimage.png';
    }
  }

}
