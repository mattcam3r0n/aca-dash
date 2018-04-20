'use strict';

const expect = require('chai').expect;
const acaDash = require('../index');

describe('#aca-dash', function() {
    describe('#map', function() {
        const a = [{ name: 'foo' }, { name: 'bar' }];
        const mapFunc = (x) => {
            return x.name;
        };

        it('should map to list of names', function() {
            const result = acaDash.map(a, mapFunc);
            expect(result).to.eql(['foo', 'bar']);
        });

        it('should produce same result as native map', function() {
            const result = acaDash.map(a, mapFunc);
            const nativeResult = a.map(mapFunc);
            expect(result).to.eql(nativeResult);
        });
    });

    describe('#filter', function() {
        const a = [1, 2, 3, 4, 5];
        const filterFunc = (x) => {
            return x > 2;
        };

        it('should return items greater than 2', function() {
            const result = acaDash.filter(a, filterFunc);
            expect(result).to.eql([3, 4, 5]);
        });

        it('should produce same result as native filter', function() {
            const result = acaDash.map(a, filterFunc);
            const nativeResult = a.map(filterFunc);
            expect(result).to.eql(nativeResult);
        });
    });

    describe('#find', function() {
        const a = [1, 2, 3, 4, 5];
        const findFunc = (x) => {
            return x == 3;
        };

        it('should return 3', function() {
            const result = acaDash.find(a, findFunc);
            expect(result).to.eql(3);
        });

        it('should return null if not found', function() {
            const result = acaDash.find(a, (x) => x == 6);
            expect(result).to.be.null;
        });
    });

    describe('#findLast', function() {
        const a = [1, 2, 3, 4, 5];

        it('should return 5', function() {
            const result = acaDash.findLast(a);
            expect(result).to.eql(5);
        });
    });

    describe('#head', function() {
        const a = [1, 2, 3, 4, 5];

        it('should return 1', function() {
            const result = acaDash.head(a);
            expect(result).to.eql(1);
        });
    });

    describe('#tail', function() {
        const a = [1, 2, 3, 4, 5];

        it('should return 2 thru 5', function() {
            const result = acaDash.tail(a);
            expect(result).to.eql([2, 3, 4, 5]);
        });
    });

    describe('#reverse', function() {
        const a = [1, 2, 3, 4, 5];

        it('should return [5, 4, 3, 2, 1]', function() {
            const result = acaDash.reverse(a);
            expect(result).to.eql([5, 4, 3, 2, 1]);
        });
    });

    describe('#sort', function() {
        const a = [3, 2, 5, 4, 1];

        it('should return [1, 2, 3, 4, 5]', function() {
            const result = acaDash.sort(a);
            expect(result).to.eql([1, 2, 3, 4, 5]);
        });
    });
});
