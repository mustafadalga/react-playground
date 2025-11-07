let state = { count: 0 }
type FN = () => void
const listeners: FN[] = []

export function getState() {
    return state
}

export function setState(newState: Partial<Record<string, any>>) {
    state = { ...state, ...newState }
    listeners.forEach(listener=>listener())
}

export function subscribe(fn: FN) {
    listeners.push(fn)

    return () => {
        const index = listeners.indexOf(fn)
        listeners.splice(index, 1)
    }
}