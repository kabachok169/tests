'use strict';

class Calculator {
    constructor() {
    }

    isCorrect(str) {
        return /^([0-9.*+\-\/\s])+$/.test(str);
    }

    calculate(str) {

        try {
            eval(str);
        }
        catch (error) {
            return 'error';
        }

        if (!this.isCorrect(str)) {
            return 'error';
        }

        const result = eval(str);

        console.log(result);

        if (!isFinite(result)) {
            return 'error';
        }

        return result;
    }
}

exports.calculator = Calculator;
