const chakram = require('chakram');
const expect = chakram.expect;

const url = 'http://httpbin.org/post';

describe('Experiments with JSON schema validation', () => {

    describe('String', () => {

        const schema = {
            type: 'string'
        };

        it('should pass validation', () => {
            return chakram.post(url, 'test').then((res) => {
                return expect(res).to.have.schema('json', schema);
            });
        });

        it('should fail validation', () => {
            return chakram.post(url, 1).then((res) => {
                return expect(res).not.to.have.schema('json', schema);
            });
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
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).to.have.schema('json', schema);
                });
            });

        });

        [
            { obj: { id: 5, name: 'Test', additional: false }, desc: 'object additional properties' },
            { obj: { name: 'Test' }, desc: 'object without id' },
            { obj: { id: 'test', name: 'Test' }, desc: 'object with not number id' },
            { obj: { id: 5, name: 9 }, desc: 'object with not string name' },
        ].forEach((testCase, i) => {

            it(`should fail validation - ${testCase.desc} [${i}]`, () => {
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).not.to.have.schema('json', schema);
                });
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
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).to.have.schema('json', schema);
                });
            });

        });

        [
            { obj: { id: 5 }, desc: 'not array' },
            { obj: [1, '2', 3], desc: 'array with string' },
        ].forEach((testCase, i) => {

            it(`should fail validation - ${testCase.desc} [${i}]`, () => {
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).not.to.have.schema('json', schema);
                });
            });

        });

    });

    describe('Complex object', () => {

        const schema = {
            type: 'object',
            properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                list: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            name: { type: 'string' }
                        },
                        required: ['id', 'name'],
                        additionalProperties: false
                    }
                }
            },
            required: ['id', 'name', 'list'],
            additionalProperties: false,
        };

        [
            { obj: { id: 1, name: 'A', list: [] } },
            { obj: { id: 1, name: 'B', list: [{ id: 2, name: 'X' }, { id: 3, name: 'Y' }] } },
        ].forEach((testCase, i) => {

            it(`should pass validation [${i}]`, () => {
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).to.have.schema('json', schema);
                });
            });

        });

        [
            { obj: { id: 5 } },
            { obj: [1, '2', 3] },
            { obj: { id: 1, name: 'A' } },
            { obj: { id: 2, name: 'B', list: [1, 2, 3] } },
            { obj: { id: 3, name: 'C', list: [{ id: 1 } ] } },
            { obj: { id: 4, name: 'D', list: [{ id: 1, additional: false }] } },
            { obj: { id: 4, name: 'D', list: [{ id: 1, name: 'test' }, 3] } },
        ].forEach((testCase, i) => {

            it(`should fail validation [${i}]`, () => {
                return chakram.post(url, testCase.obj).then((res) => {
                    return expect(res).not.to.have.schema('json', schema);
                });
            });

        });

    });

});
