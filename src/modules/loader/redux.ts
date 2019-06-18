import {
  createReducer,
  ActionType,
  createStandardAction
} from "typesafe-actions";

// This action let you set the answer value once you release the slider
export const displayLoader = createStandardAction("LOADER/DISPLAY")<
  undefined
>();
export const hideLoader = createStandardAction("LOADER/HIDE")<undefined>();

type Action = ActionType<typeof displayLoader> | ActionType<typeof hideLoader>;
interface State {
  isLoaderDisplayed: boolean;
}

export const loaderReducer = createReducer<State, Action>({
  isLoaderDisplayed: false
})
  .handleAction("LOADER/DISPLAY", (state, action) => {
    return { isLoaderDisplayed: true };
  })
  .handleAction("LOADER/HIDE", (state, action) => {
    return { isLoaderDisplayed: false };
  });
