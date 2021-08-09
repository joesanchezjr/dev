import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  query: "",
  isSubmitting: false,
  isQuick: false,
  error: "",
}

export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload
    },
    toggleIsQuick: (state) => {
      state.isQuick = !state.isQuick
    },
  },
})

export const { setQuery, setError, setIsSubmitting, toggleIsQuick } = searchFormSlice.actions

export default searchFormSlice.reducer
