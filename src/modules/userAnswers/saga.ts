import { ActionType, getType } from "typesafe-actions";
import { takeLatest } from "@redux-saga/core/effects";

import { postAnswerActions } from "./redux";
import { displayLoader, hideLoader } from "../loader/redux";
import { AnswerApi } from "./api";

type PostAnswerRequestAction = ActionType<typeof postAnswerActions.request>;

function* postAnswerSaga(action: PostAnswerRequestAction) {
  // >>>> TODO <<<<
  // - before the call set the loader to "loading" using the "displayLoader" action
  // - then perform a POST call to "https://postman-echo.com/post" with the payload, using AnswerApi.answer()
  // - if the request succeed mask the loader and display a success toast (using https://github.com/crazycodeboy/react-native-easy-toast of instance)
  // - else mask thee loader and display an error Toast
}

// This will call postAnswerSaga on each "ANSWER/POST_REQUEST" action
// which are dispatched using
// `postAnswerActions.request({10: {value: 150}})`
export function* answerSaga() {
  yield takeLatest(getType(postAnswerActions.request), postAnswerSaga);
}
