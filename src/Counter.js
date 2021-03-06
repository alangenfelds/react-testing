import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }))
    }


    render() {

        const { count } = this.state;

        return (
            <div className="buttonContainer">
                <button data-testid="counter-button" onClick={this.increment}>{count}</button>
            </div>
        )
    }
}
