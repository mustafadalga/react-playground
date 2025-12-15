/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args: any[]) {
    let list = ""

    const add = (className: string) => {
        if (list.length) {
            list += list[list.length - 1] == " " ? className : ` ${className}`
        } else {
            list = className
        }
    }

    for (const row of args) {
        if (typeof row === "string" && row) {
            add(row)
        } else if (typeof row === "number" && row) {
            add(String(row))
        } else if (Array.isArray(row)) {
            for (const arrItem of row) {
                add(classNames(arrItem))
            }
        } else if (typeof row === "object" && row !== null) {
            for (const property in row) {
                if (row[property]) {
                    add(property)
                }
            }

        }
    }

    return list

}


console.log("bar 1", classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // "foo bar"
// console.log(classNames('foo', { bar: true })); // "foo bar"
// console.log(classNames({ 'foo-bar': true })); // "foo-bar"
// console.log(classNames({ 'foo-bar': false })); // ""
// console.log(classNames({ foo: true }, { bar: true })); // "foo bar"
// console.log(classNames({ foo: true, bar: true })); // "foo bar"
// console.log(classNames({ foo: true, bar: false, qux: true }, [ "ali", "veli" ], { husnu: 3, hakan: 0 })); // "foo qux"
