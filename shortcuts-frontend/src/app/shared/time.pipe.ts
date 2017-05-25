import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {

    transform(value: number): string {
        let minutes = Math.floor(value/60);
        let seconds = value - minutes*60;

        return `${minutes}m ${seconds}s`
    }

}
