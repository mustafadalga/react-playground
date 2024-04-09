import { useEffect, useState } from "react";
// https://commerce.nearform.com/blog/2021/stores-no-context-api/

const createEmitter = () => {
    const subscriptions = new Map();

    return {
        emit: (v) => subscriptions.forEach(fn => fn(v)),
        subscribe: (fn) => {
            const key = Symbol();
            subscriptions.set(key, fn);

            return () => {
                subscriptions.delete(key);
            }
        }
    }
}

export const createStore = (init) => {
    const emitter = createEmitter();
    let store = null;
    const get = () => store;
    const set = (operation) => {
        store = operation(store);

        emitter.emit(store);
    }

    store = init(get, set);

    const useStore = () => {
        const [ localStore, setLocalStore ] = useState(get())

        useEffect(() => {
            emitter.subscribe(setLocalStore)
        }, [])

        return localStore;
    }

    return useStore;
}