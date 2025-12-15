interface Session {
    user: number;
    duration: number;
    equipment: string[];
}

export default function mergeData(sessions) {
    const map = new Map()
    const order = []

    for (const row of sessions) {
        if (!map.has(row.user)) {
            map.set(row.user, { duration: row.duration, equipment: new Set(row.equipment) })
            order.push(row.user)
        } else {
            const obj = map.get(row.user)
            obj.duration += row.duration
            row.equipment.forEach(item => obj.equipment.add(item))
        }
    }


    return order.map(user => {
        const obj = map.get(user)
        return { user, duration: obj.duration, equipment: Array.from(obj.equipment).sort() }
    })
}

console.log(mergeData([
    { user: 8, duration: 50, equipment: [ 'bench' ] },
    { user: 7, duration: 150, equipment: [ 'dumbbell' ] },
    { user: 1, duration: 10, equipment: [ 'barbell' ] },
    { user: 7, duration: 100, equipment: [ 'bike', 'kettlebell' ] },
    { user: 7, duration: 200, equipment: [ 'bike' ] },
    { user: 2, duration: 200, equipment: [ 'treadmill' ] },
    { user: 2, duration: 200, equipment: [ 'bike' ] },
]))