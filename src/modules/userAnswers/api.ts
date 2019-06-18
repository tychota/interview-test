import wretch from "wretch";
import { Answer } from "./redux";

const postmanEcho = wretch()
  .url("https://postman-echo.com/")
  .content("application/json");

type Payload = { [questionId: number]: Answer };

export class AnswerApi {
  public static async postAnswer(payload: Payload) {
    return await postmanEcho
      .url("/post")
      .post(payload)
      .json<{ json: Payload }>();
  }
}
