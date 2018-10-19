const main = require('../index.js');
const assert = require('assert');


describe('calculator', function() {
    const calculator = new main.calculator();

    // it('check function isDigit', function() {
    //     assert.equal(calculator.isDigit('63'), true);
    //     assert.equal(calculator.isDigit('*'), false);
    //     assert.equal(calculator.isDigit('*54'), false);
    //     assert.equal(calculator.isDigit('lol'), false);
    // });

    // it('check function transformToPolska', function() {
    //     assert.deepEqual(calculator.transformToPolska('63 + 21'), ['63', '21', '+']);
    //     assert.deepEqual(calculator.transformToPolska('63 + 21 * 2'), ['63', '21', '2', '*', '+']);
    // });

    it('check +', function() {
        assert.equal(calculator.calculate('41 + 22'), 63);
        assert.equal(calculator.calculate('1 + 0'), 1);
    });

    it('check -', function() {
        assert.equal(calculator.calculate('51 - 12'), 39);
        assert.equal(calculator.calculate('0 - 0'), 0);
        assert.equal(calculator.calculate('4 - 5'), -1);
    });

    it('check *', function() {
        assert.equal(calculator.calculate('12 * -2'), -24);
        assert.equal(calculator.calculate('12 * 2'), 24);
        assert.equal(calculator.calculate('4 * 0'), 0);
    });

    it('check /', function() {
        assert.equal(calculator.calculate('3 / 2'), 1.5);
        assert.equal(calculator.calculate('0 / 2'), 0);
        assert.equal(calculator.calculate('1 / 0'), 'error');
        assert.equal(calculator.calculate('0 / 0'), 'error');
    });

    it('check calculations', function() {
        assert.equal(calculator.calculate('32 + 63 / 3 - 53 * 2'), -53);
        assert.equal(calculator.calculate('32 + 63 / 0 - 53 * 2'), 'error');
    });

    it('check correct input', function() {
        assert.equal(calculator.calculate('1g +d2'), 'error');
        assert.equal(calculator.calculate('1 + 2 -'), 'error');
        assert.equal(calculator.calculate('1 + 2 -'), 'error');

        assert.equal(calculator.calculate('1.4 2'), 'error');
        assert.equal(calculator.calculate('1***2'), 'error');
        assert.equal(calculator.calculate('ans'), 'error');
        assert.equal(calculator.calculate('ans + lkp'), 'error');
    });
});
