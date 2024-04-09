// https://commerce.nearform.com/blog/2021/stores-no-context-api/
import { createStore } from "@/store/createStore.ts";

const initialState = {
    count: 0,
    search: "",
    posts: []
}

export const useCommon = createStore((get, set) => ({
    ...initialState,
    increment: () => set(store => ({ ...store, count: store.count + 1 })),
    decrement: () => set(store => ({ ...store, count: store.count - 1 })),
    setSearch: (search) => set(store => ({ ...store, search })),
    fetchPosts: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        set(store => ({ ...store, posts }));
    }
}));