import { Pipe, PipeTransform } from '@angular/core';

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {

    transform(value: number): string {
        const hours = Math.floor(value / SECONDS_IN_HOUR);
        let remaining = hours * SECONDS_IN_HOUR;
        const minutes = Math.floor(remaining / SECONDS_IN_MINUTE);
        remaining -= minutes * SECONDS_IN_MINUTE;

        return `${padTime(hours)}:${padTime(minutes)}:${padTime(remaining)}`;
    }

}

function padTime(timeValue: number): string {
    const timeString = String(timeValue);

    return timeString.length === 1 ? `0${timeString}` : timeString;
}
