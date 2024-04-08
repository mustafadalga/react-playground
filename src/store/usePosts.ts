import { createSlice } from "state-syncer";

export interface Post {
    title: string
}


type State = {
    posts: Post[]
}

const initialState: State = {
    posts: [],
};

export const { useGlobalState: usePosts } = createSlice<State>(initialState);
