export class EventEmitter {
    constructor() {
        this.events = {};
    }

    register(name, callback) {
        if(this.events[name]) {
            this.event[name].push(callback);
        } else {
            this.events[name] = [callback]
            this.events[name].oneTime = false;
        }

    }

    registerOneTime(name, callback) {
        if(this.events[name]) {
            this.event[name].push(callback);
            this.events[name].oneTime = true;
        } else {
            this.events[name] = [callback];
            this.events[name].oneTime = true;
        }

    }

    trigger(name, ...rest) {
        if (this.events[name]) {
            this.events[name].forEach(cb =>
            cb.apply(rest)
            );
        }

        if(this.events[name].oneTime) {
            delete this.events[name]
        }
    }

    remove(name) {
        if(this.events[name]) {
            delete this.events[name]
        } else {
            console.log("Event not registered")
        }  
    }

    removeAll() {
        this.events = {};
    }
}
