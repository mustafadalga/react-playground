export default function memoize(fn: (...args: unknown[]) => unknown) {
    const map = new Map()
    return function memoized(...args: unknown[]) {
        const key=JSON.stringify(args)
        if (map.has(key)) {
            return map.get(key)
        }
        const result = fn.apply(this,args)
        map.set(key, result)

        return result
    }
}

let count = 0;

function mul(x: number) {
    count++;
    return this.age * x;
}

const person = {
    age: 42,
    mul: memoize(mul),
};

console.log("count before any call:", count); // 0

console.log("person.mul(2):", person.mul(2)); // 84
console.log("count after first call:", count); // 1

console.log("person.mul(2) again:", person.mul(2)); // 84 (memoized)
console.log("count after second call:", count); // 1 (no increment)
