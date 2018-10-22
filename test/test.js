const main = require('../index.js');
const assert = require('assert');


describe('calculator', function() {
    const calculator = new main.calculator();

    it('check function isCorrect', function() {
        assert.equal(calculator.isCorrect('*54'), true);
        assert.equal(calculator.isCorrect('lol'), false);
    });

    it('check zero division', function() {
        assert.equal(calculator.calculate('1 / 0'), 'error');
    });

    it('check calculations', function() {
        assert.equal(calculator.calculate('32 + 63 / 3 - 53 * 2'), -53);
        assert.equal(calculator.calculate('32 + 63 / 0 - 53 * 2'), 'error');
    });

    it('check correct input', function() {
        assert.equal(calculator.calculate('1g +d2'), 'error');
        assert.equal(calculator.calculate('1 + 2 -'), 'error');

        assert.equal(calculator.calculate('1.4 2'), 'error');
        assert.equal(calculator.calculate('1***2'), 'error');

        assert.equal(calculator.calculate('ans'), 'error');
        assert.equal(calculator.calculate('ans + lkp'), 'error');
        assert.equal(calculator.calculate('*'), 'error');
    });
});

