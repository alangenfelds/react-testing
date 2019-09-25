import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import NewMovie from '../NewMovie'

afterEach(cleanup)

test('<NewMovie />', () => {
    const { debug, getByTestId, queryByTestId, container, getByText } = render(<NewMovie />)
    // get - strict - will throw error if not found
    expect(getByTestId('page-title').textContent).toEqual('New Movie')

    // query - soft - will continue if not found
    expect(queryByTestId('movie-form')).toBeTruthy()
    
    // debug();
    // console.log('container', container.firstChild)
    expect(container.firstChild).toMatchSnapshot()

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton)
})