const main = require('../index.js');
const assert = require('assert');


describe('calculator', function() {
    const calculator = new main.calculator();

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

    it('check priority', function() {
        assert.equal(calculator.calculate('32 + 63 / 3 - 53 * 2'), -53);
    });

    it('check input line validity', function() {
        assert.equal(calculator.calculate('1+ 2'), 'error');
        assert.equal(calculator.calculate('1 +2'), 'error');
        assert.equal(calculator.calculate('1g +d2'), 'error');
    });
});