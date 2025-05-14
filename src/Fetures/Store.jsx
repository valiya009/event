import { configureStore } from "@reduxjs/toolkit";
import reducer from "./USerSlice";

export const Store = configureStore({
     reducer:reducer
})