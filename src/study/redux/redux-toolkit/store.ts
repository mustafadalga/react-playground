// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        incremented: state => { state.value += 1 },
        decremented: state => { state.value -= 1 }
    }
});

// Export actions
export const { incremented, decremented } = counterSlice.actions;

// Configure store
export const store = configureStore({
    reducer: counterSlice.reducer
});
