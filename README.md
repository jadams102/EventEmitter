# Event Emitter

Standard Event Emitter module built with ES6 Javascript

#### By **Joel Adams**

## Description

Standard Event Emitter module built with Javascript. The event emitter object allows named events to be registered to (using `.register()`), and then executed by the emitter (using `.trigger()`. Using `.registerOneTime()` events that can be called only once may be registered. Named events may be removed individually by `.remove('EventName')` or removed all at once by `.removeAll()`.

*Github Repo: https://github.com/jadams102/EventEmitter*

## Instructions

To use the emitter, first require or import the event emitter module, then create an instance of the EventEmitter class:
```javascript 
const ee = new EventEmitter();
```

Events may be registered to the EventEmitter class like so:
```javascript 
const ee = new EventEmitter();

ee.register('EventName', Function);
```

One time events may be registered to the EventEmitter class as well:
```javascript 
const ee = new EventEmitter();

ee.registerOneTime('EventName', Function);
```

Events can then by triggered by like so:
```javascript 
const ee = new EventEmitter();

ee.register('EventName', Function);

ee.trigger('EventName');
```

For events containing functions that take multiple arguments, those arguments can be passed in as an array:
```javascript 
ee.register('EventName', Function(argOne, argTwo, argThree));

ee.trigger('EventName', ['argOne', 'argTwo', 'argThree']);
```

Specific registered events can be un-registered with the following:
```javascript 
ee.remove('EventName');
```

All registered events can be un-registered with the following:
```javascript 
ee.removeAll();
```




## Features
* Emits named Events with any number of arguments
* Able to register handler functuions that are passed the appropriate arguments on emission
* Register one-time handlers
* Methods to remove one or all handlers

## Setup/Installation Requirements
Requires Node.Js
* Clone github directory from *https://github.com/jadams102/EventEmitter*
* Navigate to root directory, run `npm install` from console to restore packages.
* Tests can be run with `npm test`.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* Node.js
* Javascript
* VSCode
* Webpack

## Support and contact details

_Please contact  the creator through Github.com: jadams102_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **Joel Adams**
