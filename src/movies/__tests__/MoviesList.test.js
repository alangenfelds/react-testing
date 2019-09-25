import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "../MoviesList";

// mocking global fetch function
global.fetch = require("jest-fetch-mock");

afterEach(cleanup);


const movies = {
  success: true,
  results: [
    {
      id: "12413",
      title: "Guardians of the Galaxy 1",
      poster_path: 'galaxy1.jpg'
    },
    {
      id: "3422",
      title: "The Prospect",
      poster_path: 'prosper_scene.jpg'
    }
  ]
};

test("renders <MoviesList />", async () => {
  // mocking fetch response
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { debug, getByTestId, queryAllByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  expect(getByTestId('loading').textContent).toBe('Loading');
  await waitForElement(() => getByTestId("movie-link"));
  
//   expect(getByTestId("movie-link")
//   .getAttribute('href')).toBe("/" + movies.results[0].id)

  expect(queryAllByTestId("movie-link").length).toEqual(movies.results.length)
  expect(getAllByTestId("movie-link").length).toEqual(movies.results.length)

  queryAllByTestId("movie-link").map( (node, idx) => {
    //   console.log(idx, node.getAttribute('href'))
      expect(node.getAttribute('href')).toBe("/"+movies.results[idx].id)
    })

//   debug();
});

test("<MoviesList /> when API failed", async () => {
  // mocking fetch response
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { debug, getByTestId, queryAllByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  await waitForElement(() => getByTestId("loading"));
  
//   expect(getByTestId("movie-link")
//   .getAttribute('href')).toBe("/" + movies.results[0].id)

  expect(queryAllByTestId("movie-link").length).toBe(0)

//   debug();
});
