import { configureStore } from "@reduxjs/toolkit"
import searchFormReducer from "../features/searchForm/searchForm-slice"

export const store = configureStore({
  reducer: {
    searchForm: searchFormReducer,
  },
})
