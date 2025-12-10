import { useEffect, useState } from "react";

export function createStore(initialState) {
    let state = initialState

    const listeners = new Set()


    const getState = () => state
    const setState = (partial) => {
        state = typeof partial === 'function' ? partial(state) : { ...state, ...partial }
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.add(listener)

        return () => listeners.delete(listener)
    }


    return {
        getState,
        setState,
        subscribe
    }
}

export function createHook(store) {
    return function useStore(selector) {
        const [ , force ] = useState(0)


        useEffect(() => {
            return store.subscribe(() => force(x => ++x), [])
        }, []);

        return selector(store.getState())

    }
}