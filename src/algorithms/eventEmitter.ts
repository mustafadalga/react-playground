// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {
    observers: Map<string, Set<(...args: any[]) => any>>

    constructor() {
        this.observers = new Map()
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
        if (this.observers.has(eventName)) {
            const fnList = this.observers.get(eventName)
            fnList.add(listener)

        } else {
            this.observers.set(eventName, new Set([ listener ]))
        }

        console.log(this.observers)
        return this
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        if (this.observers.has(eventName)) {
            const fnList = this.observers.get(eventName)
            fnList.delete(listener)

            if (fnList?.size === 0) {
                this.observers.delete(eventName)
            }
        }


        return this
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        if (this.observers.has(eventName)) {
            const fnList = this.observers.get(eventName)
            fnList.forEach(row => row(...args))
            return true
        }

        return false
    }
}
const emitter = new EventEmitter();

let sum = 0;

function addTwoNumbers(a: number, b: number) {
    sum = a + b;
}

emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5)
console.log(sum)

emitter.off('foo', addTwoNumbers);
console.log(emitter.emit('foo', -3, 9))