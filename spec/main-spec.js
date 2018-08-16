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

});