export default function curry(func,) {

    return function curried(...args) {
        const context = this
        if (args.length === func.length) {
            return func.apply(context, args)
        } else {
            return function(...args2){
                return curried.apply(context, [ ...args,...args2 ])
            }
        }
        console.log(func.length, args)
    }
}


function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4))

const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4))