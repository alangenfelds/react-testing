import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Counter from './Counter'


afterEach(cleanup)

test('<Counter />', () => {
    // const wrapper = render(<Counter />)
    const {debug, getByTestId} = render(<Counter />)

    // wrapper.debug();
    // expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON')
    // expect(wrapper.getByTestId('counter-button').textContent).toBe('0')
    // console.log(wrapper.getByText('0').textContent)
    // console.log(wrapper.getByText('0').tagName)

    // debug()

    const counterButton = getByTestId('counter-button');

    expect(counterButton.tagName).toBe('BUTTON')
    expect(counterButton.textContent).toBe('0')

    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1')

    
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2')

})