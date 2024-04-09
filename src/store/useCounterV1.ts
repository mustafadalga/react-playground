// https://commerce.nearform.com/blog/2021/stores-no-context-api/
import { createStore } from "@/store/createStore.ts";

export const useCountStoreV1 = createStore((get, set) => ({
    count: 0,
    increment: () => set(store => ({ ...store, count: store.count + 1 })),
    decrement: () => set(store => ({ ...store, count: store.count - 1 })),
    fetch: async () => {
        await new Promise(resolve => setTimeout(resolve, 1400));
        set(store => ({ ...store, count: Math.round(Math.random() * 100) }));
    }
}));