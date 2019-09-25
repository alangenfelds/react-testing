import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "react-testing-library";
import MovieDetail from "../MovieDetail";

// mocking global fetch function
global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

// mocking to check if there was error message in console
console.error = jest.fn();

const match = { params: { id: "123456" } };
const movie = {
  id: "12413",
  title: "Mocked Test Title"
};

test("renders <MovieDetail />", async () => {
  // mocking fetch response
  fetch.mockResponseOnce(
    JSON.stringify(movie)
  );

  const { debug, getByTestId } = render(
    <MovieDetail match={match} />
  );

  // h1 should contain mock title
  //   await waitForElement(() => getByText("Mocked Test Title"));

  await waitForElement(() => getByTestId("movie-title"));
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
//   debug();
});
