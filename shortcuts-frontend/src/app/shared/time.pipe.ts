import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {

    transform(value: number): string {
        let hours = Math.floor(value/3600);
        value -= hours*3600;
        let minutes = Math.floor(value/60);
        value -= minutes*60;
        let seconds = value;

        return `${hours}h ${minutes}m ${seconds}s`
    }

}
