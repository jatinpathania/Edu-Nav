import { put, call, takeLatest, all } from "redux-saga/effects";
import * as api from "./api";
import {
  signUpUserSuccess,
  signUpUserFailed,
  signInUserSuccess,
  signInUserFailed,
  fetchRecommendationsSuccess,
  fetchRecommendationsFailed,
} from './Slice';

function* signUpUserSaga(action) {
  try {
    const response = yield call(api.signUp, action.payload);
    const { user, token } = response.data;
    
    yield put(signUpUserSuccess({
      message: response.data.message,
      user,
      token
    }));

    yield put(signInUserSuccess({ user, token }));

  } catch (error) {
    yield put(signUpUserFailed({ error: error.message }));
  }
}

function* signInUserSaga(action) {
  try {
    const response = yield call(api.signIn, action.payload);
    const { user, token, message } = response.data;
    
    yield put(signInUserSuccess({ user, token, message }));
    
  } catch (error) {
    yield put(signInUserFailed({ error: error.message }));
  }
}

function* fetchRecommendationsSaga(action) {
  try {
    const response = yield call(api.getRecommendations, action.payload.userId);
    
    yield put(fetchRecommendationsSuccess({ recommendations: response.data }));
  
  } catch (error) {
    yield put(fetchRecommendationsFailed({ error: error.message }));
  }
}

function* rootSaga() {
  yield all([
    takeLatest('app/signUpUser', signUpUserSaga),
    takeLatest('app/signInUser', signInUserSaga),
    takeLatest('app/fetchRecommendations', fetchRecommendationsSaga),
  ]);
}

export default rootSaga;