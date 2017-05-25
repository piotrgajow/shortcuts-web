import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';



@Component({
    selector: 'timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit, OnDestroy {
    static readonly TIMER_DELAY: number = 0;
    static readonly TIMER_INTERVAL: number = 1000;

    @Input() time: number;
    @Output() timeChange: EventEmitter<number> = new EventEmitter();
    timerSubscription: Subscription;

    ngOnInit(): void {
        let timer = Observable.timer(TimerComponent.TIMER_DELAY, TimerComponent.TIMER_INTERVAL);
        this.timerSubscription = timer.subscribe(t => {
            this.time = t;
            this.timeChange.emit(t);
        });
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

}
