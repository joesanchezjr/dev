import { configureStore } from "@reduxjs/toolkit"
import searchFormReducer from "../features/searchForm/searchFormSlice"

export const store = configureStore({
  reducer: {
    searchForm: searchFormReducer,
  },
})
