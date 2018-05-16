import { Pipe, PipeTransform } from '@angular/core';
import { default as AnsiUp } from 'ansi_up';

@Pipe({
  name: 'ansiColorize'
})
export class AnsiColorizePipe implements PipeTransform {

  ansi_up = new AnsiUp();

  constructor() {
    this.ansi_up.use_classes = true;
  }

  transform(value: string, args?: any): any {
    return this.ansi_up.ansi_to_html(value);
  }

}
