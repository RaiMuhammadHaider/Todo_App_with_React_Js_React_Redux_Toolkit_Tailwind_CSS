import { configureStore } from "@reduxjs/toolkit";
import allFunctionality from './MyTodoSlice'
export const MyStore = configureStore({
reducer:allFunctionality,
})