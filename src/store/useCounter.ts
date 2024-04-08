import { createSlice } from "state-syncer";

type State = {
    count: number
}


const initialState: State = {
    count: 0,
};

export const { useGlobalState: useCounter } = createSlice(initialState);
