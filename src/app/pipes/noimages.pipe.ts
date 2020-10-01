import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noimages',
})
export class NoimagesPipe implements PipeTransform {
    /* Validaciòn de las imagenes recibidas de Spotify, en caso de no haber imagen se utiliza una por default.*/
    transform(images: any[]): string {
        if (!images) {
            return 'assets/img/noimage.png';
        }
        if (images.length > 0) {
            return images[0].url;
        } else {
            return 'assets/img/noimage.png';
        }
    }
}
