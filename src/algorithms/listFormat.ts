export default function listFormat(items, { length = 0, sorted, unique } = {}) {
    let filteredItems = items.filter(item => typeof item == "string" && item.length || typeof item == "number" && item > 0)

    if (unique) {
        filteredItems = [ ...new Set([ ...filteredItems ]) ]
    }

    if (filteredItems.length === 1) return filteredItems[0]

    if (sorted) {
        filteredItems.sort((a, b) => a.localeCompare(b))
    }

    const userLength =length<1 || length>filteredItems.length ? 0 : length// Math.max(0, Math.min(length, filteredItems.length-1))
    console.log(userLength)
    let str = ""
    let currentLength = 0
    for (let index = 0; index < filteredItems.length; index++) {

        if (userLength && currentLength < userLength) {
            str += `${filteredItems[index]}${(currentLength === userLength - 1) ? "" : ","} `
            currentLength++
        } else if (!userLength && index < filteredItems.length - 1) {
            str += `${filteredItems[index]}${(index === filteredItems.length - 2) ? "" : ","} `
        } else if ((userLength && userLength === currentLength)) {
            const remain = filteredItems.length - currentLength
            str += `and ${remain} other${remain > 1 ? "s" : ""}`
            break
        } else if (!userLength && index === filteredItems.length - 1) {
            str += `and ${filteredItems[index]}`
            break
        }

    }

    return str
}

console.log(listFormat([ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: 100 }))