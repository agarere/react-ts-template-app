import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;
export default counterSlice.reducer;