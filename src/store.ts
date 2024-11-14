import { create } from "zustand";

export const useStore = create((set) => ({
    user: {
        name: 'John',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Anytown'
        }
    },
    count: 0,
    increaseCount: () => set((state) => ({
        count: state.count + 1
    })),
    changeName: name => set(state => ({ user: { ...state.user, name: name }})),
    changeAddress: address => set(state => ({
        user: {
            ...state.user,
            address: { ...state.user.address, street: address }
        }
    })),
    removeCount: () => set({ count: 0 }),
}));

export const useStoreSelector = (selector) => {
    return useStore((state) => {
        return selector.split('.').reduce((accumulator, part) => accumulator && accumulator[part], state);
    });
};


type BearFamilyMealsStore = {
    [key: string]: string
}

export const useBearFamilyMealsStore = create<BearFamilyMealsStore>()(() => ({
    papaBear: 'large porridge-pot',
    mamaBear: 'middle-size porridge pot',
    babyBear: 'A little, small, wee pot',
}))
