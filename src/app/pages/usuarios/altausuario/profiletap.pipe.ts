import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'keys',
  pure: false // el pipe esta pendiente de los cambios en angular en este caso que las id o key exixtan
})
export class KeysPipe implements PipeTransform {
  transform(value: any): any {
    const keys = []; // variable de array

    // tslint:disable-next-line:forin
    for (const id in value) {
      // for que busca en el array
      keys.push(id); // guarda en el array las llaves exixtentes
    }
    return keys; // regresa el array
  }
}
