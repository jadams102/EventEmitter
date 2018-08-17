import { EventEmitter } from '../src/main';

describe('EventEmitter', function() {
    it('should register a named event', function() {
        const ee = new EventEmitter();

        ee.register('click', () => {
            console.log('test one');
        });

        expect (ee.events['click']).toBeDefined();
        expect (ee.events['click'].oneTime).toEqual(false);
    });

    it('should register a one-time event', function() {
        const ee = new EventEmitter();

        ee.registerOneTime('click', () => {
            console.log('test two');
        });

        expect (ee.events['click']).toBeDefined();
        expect (ee.events['click'].oneTime).toEqual(true);
    });

    it('should trigger an event', function() {
        let result = 'test';
        const ee = new EventEmitter();
        ee.register('click', () => {
            result = 'result';
        });

        ee.trigger('click');

        expect (result).toEqual('result');
    });

    it('should trigger a one-time event', function() {
        let result = 'test';
        const ee = new EventEmitter();
        ee.registerOneTime('click', () => {
            result = 'result';
        });

        ee.trigger('click');

        expect (result).toEqual('result');
        expect (ee.events['click']).not.toBeDefined()
    });

    it('should register a function with any number of arguments', function() {
        let varOne = 'One';
        let varTwo = 'Two';
        let varThree = 'Three';
        let result = [];

        const ee = new EventEmitter();

        function ArrayMaker(One, Two, Three) {
            result = [One, Two, Three];
        }

        ee.registerOneTime('click', ArrayMaker);

        ee.trigger('click', [varOne, varTwo, varThree]);

        expect (result).toEqual(['One', 'Two', 'Three']);
    });

    it('should remove a named event', function() {
        const ee = new EventEmitter();

        ee.register('click', () => {
            console.log('test one');
        });

        ee.register('clickAgain', () => {
            console.log('test two');
        });

        ee.register('clickAThirdTime', () => {
            console.log('test three');
        });

        ee.remove('click')

        expect (ee.events['click']).not.toBeDefined();
        expect (ee.events['clickAgain']).toBeDefined();
        expect (ee.events['clickAThirdTime']).toBeDefined();
    });

    it('should remove all named events', function() {
        const ee = new EventEmitter();

        ee.register('click', () => {
            console.log('test one');
        });

        ee.register('clickAgain', () => {
            console.log('test two');
        });

        ee.register('clickAThirdTime', () => {
            console.log('test three');
        });

        ee.removeAll();

        expect (ee.events['click']).not.toBeDefined();
        expect (ee.events['clickAgain']).not.toBeDefined();
        expect (ee.events['clickAThirdTime']).not.toBeDefined();
    });

    

});