import { TimePipe } from './time.pipe';

describe('TimePipe', () => {

    let subject: TimePipe;

    beforeEach(() => {
        subject = new TimePipe();
    });

    describe('transform', () => {

        [
            { value: 0, expected: '00:00:00' },
            { value: 1, expected: '00:00:01' },
            { value: 59, expected: '00:00:59' },
            { value: 60, expected: '00:01:00' },
            { value: 61, expected: '00:01:01' },
            { value: 119, expected: '00:01:59' },
            { value: 3599, expected: '00:59:59' },
            { value: 3600, expected: '01:00:00' },
            { value: 3601, expected: '01:00:01' },
            { value: 363599, expected: '100:59:59' },
        ].forEach((testCase, i) => {

            it(`should return formatted time [${i}]`, () => {
                const result = subject.transform(testCase.value);

                expect(result).toEqual(testCase.expected);
            });

        });

    });

});
