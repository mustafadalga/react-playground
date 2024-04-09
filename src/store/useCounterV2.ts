import { createStore } from "./createStore";

const initial = 0;

const reduce = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}


export const useCounterV2 = createStore((get, set) => {
    const state = { count: initial }; // Use an object to hold your state
    const dispatch = (action) => {
        set((store) => ({
            ...store,
            count: reduce(store.count, action)
        }));
    }

    return {
        ...state,
        dispatch,
    };
});