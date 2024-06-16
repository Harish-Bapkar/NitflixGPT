import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPTView",
  initialState: {
    isGPTView: "false",
    movieName: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTView: (state) => {
      state.isGPTView = !state.isGPTView;
    },
    addGptMovies: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
