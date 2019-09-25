import React, { Component } from "react";

export default class MovieForm extends Component {
  state = {
    text: ""
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() =>
            submitForm({
              text
            })
          }
        >
          <label htmlFor="text-input">
              Text
            <input id="text-input" type="text" onChange={ e => this.setState({
                text: e.target.value
            })}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
