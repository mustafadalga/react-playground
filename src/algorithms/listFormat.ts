export default function listFormat(items: string[], options: {
                                       sorted?: boolean,
                                       unique?: boolean,
                                       length?: number
                                   } = {}
) {
    const { length = 0, sorted = false, unique = false } = options
    let filteredItems = items.filter(item => item.trim().length)

    if (!filteredItems.length) return ""

    if (unique) {
        filteredItems = [ ...new Set([ ...filteredItems ]) ]
    }

    if (filteredItems.length === 1) return filteredItems[0]

    if (sorted) {
        filteredItems.sort((a, b) => a.localeCompare(b))
    }

    const showAll = length < 1 || length >= filteredItems.length
    console.log(showAll)
    const displayCount = showAll ? filteredItems.length - 1 : length
    const visibleItems = filteredItems.slice(0, displayCount).join(", ")

    if (showAll) {
        return `${visibleItems} and ${filteredItems[filteredItems.length - 1]}`
    } else {
        const remainItem = filteredItems.length - displayCount
        return `${visibleItems} and ${filteredItems.length - displayCount} ${remainItem > 1 ? "others" : "other"}`
    }
}

// https://www.greatfrontend.com/questions/javascript/list-format?practice=practice&tab=coding
const cases: [ string[], { length?: number, sorted?: boolean, unique?: boolean }? ][] = [
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ] ],
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: 100 } ],
    [ [ "", "" ] ],
    [ [ 'Bob' ] ],
    [ [ 'Bob', 'Alice' ] ],
    //
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: -1 } ],
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: 4 } ],
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: 3, sorted: true } ],
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob' ], { length: 3, unique: true } ],
    [ [ 'Bob', 'Ben', 'Tim', 'Jane', 'John' ], { length: 3, unique: true } ],
    [ [ 'Bob', 'Ben', '', '', 'John' ] ],
];


for (let i = 0; i < cases.length; i++) {
    const [ items, options ] = cases[i];
    console.log(listFormat(items, options));
}
