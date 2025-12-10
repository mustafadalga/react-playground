import { createStore, createHook } from "@/utils/createStore";

const store = createStore({ users: [] });

export const usersStore = {
    use: createHook(store),
    set: store.setState,
};
