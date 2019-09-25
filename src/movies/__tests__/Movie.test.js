import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import Movie, { POSTER_PATH } from "../Movie";


afterEach( () => { 
    cleanup();
    console.error.mockClear();
});

// mocking to check if there was error message in console
console.error = jest.fn();

const movieMock = {
  id: "123",
  title: "Mock Movie Title",
  poster_path: "image1.jpg"
};

test("expect console error if no props passed to <Movie />", () => {
  const { queryByTestId, getByText, getByLabelText } = render(<Movie />);

  expect(console.error).toBeCalled();
});

test("renders <Movie /> with props", () => {
  const { getByTestId, debug } = render(
    <MemoryRouter>
      <Movie movie={movieMock} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();

  const movieLink = getByTestId('movie-link');
  expect(movieLink.getAttribute('href')).toBe("/" + movieMock.id)

  const movieImage = getByTestId('movie-image');
//   expect(movieImage.getAttribute('src')).toBe(POSTER_PATH + movieMock.poster_path)
  expect(movieImage.src).toBe(POSTER_PATH + movieMock.poster_path)

  // debug();
});
