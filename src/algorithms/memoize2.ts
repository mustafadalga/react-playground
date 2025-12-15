export default function memoize2<T extends (...args: unknown[]) => unknown>(fn:T , maxCache: number) {
    const map = new Map<string,ReturnType<T>>()

    return function memoized(...args: unknown[]) {
        const key = JSON.stringify(args)
        if (map.has(key)) {
            return map.get(key)
        }

        if (map.size === maxCache) {
            const firstElement = map.keys().next().value
            map.delete(firstElement)
        }

        const result = fn.apply(this, args)
        map.set(key, result)
        return result

    }
}

function sum(a: number, b: number) {
    console.log('Computing...');
    return a + b;
}

const memoizedSum = memoize2(sum, 2);
console.log("memoizedSum(1, 2):", memoizedSum(1, 2)); // Computing... 3
console.log("memoizedSum(1, 2) again:", memoizedSum(1, 2)); // 3 (cached)
console.log("memoizedSum(2, 3):", memoizedSum(2, 3)); // Computing... 5
console.log("memoizedSum(3, 4):", memoizedSum(3, 4)); // Computing... 7 (cache exceeded, (1,2) removed)
console.log("memoizedSum(1, 2) after cache eviction:", memoizedSum(1, 2)); // Computing... 3 (recomputed)
