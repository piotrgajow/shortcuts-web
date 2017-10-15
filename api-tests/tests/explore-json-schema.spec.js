const chakram = require('chakram');
const expect = chakram.expect;

const url = 'http://localhost:8080/echo';

describe('Experiments with JSON schema validation', () => {

    describe('String', () => {

        const schema = {
            'type': 'string'
        };

        it('should pass validation', () => {
            const res = chakram.post(url, 'test');
            return expect(res).to.have.schema(schema);
        });

        it('should fail validation', () => {
            const res = chakram.post(url, 1);
            return expect(res).not.to.have.schema(schema);
        })

    });

    describe('Simple object', () => {

        const schema = {
            type: 'object',
            properties: {
                id: { type: 'number' },
                name: { type: 'string' },
            },
            required: ['id'],
            additionalProperties: false,
        };

        [
            { obj: { id: 5, name: 'Test' }, desc: 'object with id and name' },
            { obj: { id: 9 }, desc: 'object with id only' },
        ].forEach((testCase, i) => {

            it(`should pass validation - ${testCase.desc} [${i}]`, () => {
                const res = chakram.post(url, testCase.obj);
                return expect(res).to.have.schema(schema);
            });

        });

        [
            { obj: { id: 5, name: 'Test', additional: false }, desc: 'object additional properties' },
            { obj: { name: 'Test' }, desc: 'object without id' },
            { obj: { id: 'test', name: 'Test' }, desc: 'object with not number id' },
            { obj: { id: 5, name: 9 }, desc: 'object with not string name' },
        ].forEach((testCase, i) => {

            it(`should fail validation - ${testCase.desc} [${i}]`, () => {
                const res = chakram.post(url, testCase.obj);
                return expect(res).not.to.have.schema(schema);
            });

        });

    });

    describe('Simple number array', () => {

        const schema = {
            type: 'array',
            items: { type: 'number' }
        };

        [
            { obj: [1, 2, 3], desc: 'array with 3 nmbers' },
            { obj: [], desc: 'empty array' },
        ].forEach((testCase, i) => {

            it(`should pass validation - ${testCase.desc} [${i}]`, () => {
                const res = chakram.post(url, testCase.obj);
                return expect(res).to.have.schema(schema);
            });

        });

        [
            { obj: { id: 5 }, desc: 'not array' },
            { obj: [1, '2', 3], desc: 'array with string' },
        ].forEach((testCase, i) => {

            it(`should fail validation - ${testCase.desc} [${i}]`, () => {
                const res = chakram.post(url, testCase.obj);
                return expect(res).not.to.have.schema(schema);
            });

        });

    });

});
