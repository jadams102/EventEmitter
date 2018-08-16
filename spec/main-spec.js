import { EventEmitter } from '../src/main';

describe('EventEmitter', function() {
    it('should register a named event', function() {
        const ee = new EventEmitter();
        ee.register('click', () => function() {
            console.log('test one');
        });
        expect (ee.events['click']).toBeDefined();
        expect (ee.events['click'].oneTime).toEqual(false);
    });

    it('should register a one-time event', function() {
        const ee = new EventEmitter();
        ee.registerOneTime('click', () => function() {
            console.log('test one');
        });
        expect (ee.events['click']).toBeDefined();
        expect (ee.events['click'].oneTime).toEqual(true);
    });
});