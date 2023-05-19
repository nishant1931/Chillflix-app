import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getUrlConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { getUrlConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;