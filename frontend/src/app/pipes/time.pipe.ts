import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {

    transform(value: number): string {
        const hours = Math.floor(value / 3600);
        value -= hours * 3600;
        const minutes = Math.floor(value / 60);
        value -= minutes * 60;
        const seconds = value;

        return `${hours}:${minutes}:${seconds}`;
    }

}
