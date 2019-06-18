import { connect } from "react-redux";
import { State } from "../modules/store";
import { setAnswer } from "../modules/userAnswers/redux";
import { Dispatch } from "redux";
import { Slider } from "./Slider.component";

interface Props {
  currentQuestion: number;
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  min: ">>>> TODO <<<<",
  max: ">>>> TODO <<<<",
  value: ">>>> TODO <<<<"
});
const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
  setCurrentQuestionAnswer: () => {
    dispatch(setAnswer({ ">>>> TODO <<<<": { value: 123 } }));
  }
});

export const SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
