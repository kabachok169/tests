'use strict';

class Calculator {
    constructor() {
        this.priority = {
            '*': 1,
            '/': 1,
            '+': 0,
            '-': 0,
        };

        this.functions = {
            '+': (op1, op2) => op1 + op2,
            '-': (op1, op2) => op1 - op2,
            '*': (op1, op2) => op1 * op2,
            '/': (op1, op2) => op1 / op2
        };

        this.stack = [];
    }

    calculate(str) {
        const polska = this.transformToPolska(str);

        if (polska === 'error') {
            return polska;
        }

        while (polska.length > 1) {
            for (let op in polska) {
                if (!this.isDigit(polska[op])) {
                    if (op < 2) {
                        return 'error'
                    }
                    
                    const result = this.functions[polska[op]](+polska[op - 2], +polska[op - 1]);
                    
                    if (!isFinite(result)) {
                        return 'error';
                    }
                    
                    polska.splice(op - 2, 3, result);
                    break;
                }
            }
        }

        return polska;
    }

    isDigit(str) {
        return /^-?[0-9]+$/.test(str);
    }

    pushToStack(result, element) {
        if (!this.stack.length) {
            this.stack.push(element);
            return;
        }

        while (this.priority[this.stack[this.stack.length - 1]] >= this.priority[element]) {
            result.push(this.stack.pop());
        }

        this.stack.push(element);
    }

    transformToPolska(input) {
        const result = [];

        input = input.split(' ');

        for (let i = 0; i < input.length; ++i) {

            if (this.isDigit(input[i])) {
                result.push(input[i])
            } else {
                if (input[i].length > 1) {
                    return 'error';
                }

                this.pushToStack(result, input[i]);
            }
        }

        while (this.stack.length) {
            result.push(this.stack.pop());
        }

        return result;
    }
}

exports.calculator = Calculator;
