import createSlice from './createSlice.ts';

export interface Post {
    title: string
}

type State = {
    count: number,
    search:string,
    posts: Post[],
}


const initialState: State = {
    count: 0,
    search:"",
    posts: [],
};

export const { useGlobalState: useCommon } = createSlice(initialState);
