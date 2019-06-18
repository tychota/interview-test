import {
  createAsyncAction,
  createReducer,
  ActionType,
  createStandardAction
} from "typesafe-actions";

export interface Answer {
  value: number;
}

// That create you a series of actions to handle the request with redux saga,
// and get the result back or handle the failure
// Ex:
// `postAnswerActions.request({ 10: { value: 150 } });`
// will create an action to send the value 150 for the question 10
// Description:
// - postAnswerActions.request() contains the answer to be posted in for of an object {10: {value: 150}} where 10 is the question id
// - postAnswerActions.success() contains the answer from the backend, null in this case
// - postAnswerActions.failure() contains the answer from the backend in case of error
export const postAnswerActions = createAsyncAction(
  "ANSWER/POST_REQUEST",
  "ANSWER/POST_SUCCESS",
  "ANSWER/POST_FAILURE",
  "ANSWER/POST_CANCEL"
)<{ [questionId: number]: Answer }, null, Error, string>();

// This action let you set the answer value once you release the slider
export const setAnswer = createStandardAction("ANSWER/SET_VALUE")<{
  [id: string]: Answer;
}>();

type Action =
  | ActionType<typeof postAnswerActions>
  | ActionType<typeof setAnswer>;
interface State {
  [questionId: number]: {
    min: number;
    max: number;
    value: null | number;
  };
}

export const answerReducer = createReducer<State, Action>({
  [10]: { min: 100, max: 250, value: null }
}).handleAction("ANSWER/SET_VALUE", (state, action) => {
  // >>>> TODO <<<<
  // modify the state given the action payload
  // example:
  // state before: {10: {min: 100, max 250, value: null}}
  // action: {type: "ANSWER/SET_VALUE", payload: {10: {value: 150}}}
  // state after: {10: {min: 100, max 250, value: 150}}
  return state;
});
