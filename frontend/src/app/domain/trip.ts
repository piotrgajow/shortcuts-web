import { LocalDateTime } from 'js-joda';

export class Trip {
    startTime!: LocalDateTime;
    duration!: number;

    constructor(obj?: any) {
        if (obj) {
            this.startTime = obj.startTime;
            this.duration = obj.duration || 0;
        }
    }

}
