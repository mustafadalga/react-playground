import { createSlice } from "state-syncer";

type State = {
    text: string
}

const initialState: State = {
    text: "",
};

export const { useGlobalState: useSearch } = createSlice<State>(initialState);
