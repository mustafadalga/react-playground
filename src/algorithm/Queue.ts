export default class Queue {
    map: Map<number, number>
    headIndex: number
    endIndex: number

    constructor() {
        this.map = new Map()
        this.headIndex = 0
        this.endIndex = 0
    }

    /**
     * Adds an item to the back of the queue.
     * @param {*} item The item to be pushed onto the queue.
     * @return {number} The new length of the queue.
     */
    enqueue(item) {
        this.map.set(this.endIndex, item)
        this.endIndex++

        return this.map.size
    }

    /**
     * Removes an item from the front of the queue.
     * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    dequeue() {
        console.log(this.headIndex, 122)
        const element = this.map.get(this.headIndex)
        this.map.delete(this.headIndex)
        this.headIndex++

        return element
    }

    /**
     * Determines if the queue is empty.
     * @return {boolean} `true` if the queue has no items, `false` otherwise.
     */
    isEmpty() {
        return this.map.size === 0
    }

    /**
     * Returns the item at the front of the queue without removing it from the queue.
     * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    front() {
        return this.map.get(this.headIndex)
    }

    /**
     * Returns the item at the back of the queue without removing it from the queue.
     * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
     */
    back() {
        return this.map.get(this.endIndex - 1)
    }

    /**
     * Returns the number of items in the queue.
     * @return {number} The number of items in the queue.
     */
    length() {
        return this.map.size
    }
}
const q = new Queue();
q.enqueue(100);
console.log(q.length()); // 1
q.enqueue(200);
console.log(q.length()); // 2
q.dequeue();
console.log(q.length()); // 1
q.enqueue(300);
console.log(q.length()); // 2
