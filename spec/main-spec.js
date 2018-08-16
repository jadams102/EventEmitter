import { EventEmitter } from '../src/main';

describe('EventEmitter', function() {
    it('should register a named event', function() {
        const ee = new EventEmitter();
        ee.register('click', () => function() {
            console.log('test one');
        });
        expect (ee.events['click']).toBeDefined();
    });
});