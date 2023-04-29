import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAdministrator'
})
export class FormatAdministratorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.charAt(0).toUpperCase();
  }

}
