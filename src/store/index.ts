import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todosReducer from "./TodosSlice";
import { TodoApi } from "./api/TodoApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [TodoApi.reducerPath]: TodoApi.reducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(TodoApi.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
