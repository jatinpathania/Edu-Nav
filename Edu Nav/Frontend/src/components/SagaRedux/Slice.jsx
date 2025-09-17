import { createSlice } from "@reduxjs/toolkit";
import { setToken, removeToken, getToken } from '../../util/tokenService'

const initialState = {
  user: null,
  token: getToken(),
  status: 'idle',
  error: null,
  message: null,
  isLoading: false,
  recommendations: [],
  aptitudeScore: null
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    signUpUserSuccess: (state, action) => {
      state.status = 'succeeded';
      state.isLoading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    signUpUserFailed: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.error = action.payload.error;
    },

    signInUser: (state) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    signInUserSuccess: (state, action) => {
      state.status = 'succeeded';
      state.isLoading = false;
      const token = action.payload.token;
      setToken(token);
      state.user = action.payload.user;
      state.token = token;
      state.message = action.payload.message;
    },
    signInUserFailed: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload.error;
    },
    fetchRecommendations: (state) => {
      state.status = 'loading';
      state.isLoading = true;
    },
    fetchRecommendationsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.isLoading = false;
      state.recommendations = action.payload.recommendations;
    },
    fetchRecommendationsFailed: (state, action) => {
      state.status = 'failed';
      state.isLoading = false;
      state.error = action.payload.error;
    },


    logout: (state) => {
      removeToken();
      state.status = 'idle';
      state.user = null;
      state.token = null;
      state.error = null;
      state.message = null;
    },
  }
});

export const {
  signUpUser,
  signUpUserSuccess,
  signUpUserFailed,
  signInUser,
  signInUserSuccess,
  signInUserFailed,
  fetchRecommendations,
  fetchRecommendationsSuccess,
  fetchRecommendationsFailed,
  logout
} = appSlice.actions;

export default appSlice.reducer;