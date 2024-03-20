import { configureStore } from "@reduxjs/toolkit";
import dmyReducer from "../features/dmySlice";

// ...
const store = configureStore({
  reducer: { dmyReducer },
});
//export type RootState = ReturnType<typeof store.getState>

export default store;
