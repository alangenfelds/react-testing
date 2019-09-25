import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "../MovieForm";

afterEach(cleanup);

// const onSubmit = () => console.log("on submit triggeed");
const onSubmit = jest.fn();

test("<MovieForm />", () => {
  const { queryByTestId, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  );

  expect(queryByTestId("movie-form")).toBeTruthy();

  const inputField = getByLabelText("Text");
  const submitButton = getByText("Submit");
  // console.log(inputField.outerHTML)

  fireEvent.click(submitButton);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: ""
  });

  // input value
  //   inputField.value = 'hello';
  //   fireEvent.change(inputField);
  fireEvent.change(inputField, { target: { value: "hello" } });

  fireEvent.click(submitButton);
  expect(onSubmit).toHaveBeenCalledTimes(2);
  expect(onSubmit).toHaveBeenCalledWith({
    text: "hello"
  });
});
