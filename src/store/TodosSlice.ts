import { createSlice } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { setTodos } = TodosSlice.actions;
export default TodosSlice.reducer;