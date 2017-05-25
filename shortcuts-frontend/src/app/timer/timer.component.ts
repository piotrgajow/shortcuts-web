import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

const TIMER_DELAY: number = 0;
const TIMER_INTERVAL: number = 1000;

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input() time: number;
    @Output() timeChange: EventEmitter<number> = new EventEmitter();
    timerSubscription: Subscription;

    ngOnInit(): void {
        let timer = Observable.timer(TIMER_DELAY, TIMER_INTERVAL);
        this.timerSubscription = timer.subscribe(t => {
            this.time = t;
        });
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

}

