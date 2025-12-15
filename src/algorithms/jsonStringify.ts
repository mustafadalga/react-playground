export default function jsonStringify<T>(val: T): string | undefined {
    if (val === null) return "null"
    const typeOfValue = typeof val

    if (typeOfValue == "string") {
        return `"${String(val)}"`
    }

    if ([ "number", "boolean" ].includes(typeOfValue)) {
        return String(val)
    }

    if (Array.isArray(val)) {
        return `[${val.map(jsonStringify).join(",")}]`
    }

    if (val?.constructor === Object) {
        const arr = []
        for (const property of Object.keys(val)) {
            arr.push(`${jsonStringify(property)}:${jsonStringify(val[property as keyof typeof val])}`)
        }

        return `{${Object.keys(val).map(key => `${jsonStringify(key)}:${jsonStringify(val[key as keyof typeof val])}`).join(",")}}`
    }

}


console.log(jsonStringify([ 1, 2, 3 ]));                     // '{"foo":"bar"}'
console.log(jsonStringify({ foo: 'bar' }));                     // '{"foo":"bar"}'
console.log(jsonStringify({ foo: 'bar', bar: [ 1, 2, 3 ] }));     // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: 'bar', bar: [ '1', '2', '3' ] }));     // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: true, bar: false }));          // '{"foo":true,"bar":false}'

console.log(jsonStringify(null), typeof jsonStringify(null), String(null));                               // 'null'
console.log(jsonStringify(true));                               // 'true'
console.log(jsonStringify({ text: 'Line1\nLine2' }));                              // 'false'
console.log(jsonStringify({ path: 'C:\\Users\\Name' }));                                  // '1'
console.log(jsonStringify({ foo: 'He said "Hello"' }) );
console.log(jsonStringify({ emoji: 'cd:\\ali\\mem' }))
