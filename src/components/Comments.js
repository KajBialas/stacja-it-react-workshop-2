import React, { Component } from 'react';

class Comments extends Component {
  state = {
    currentValue: '',
    comments: [],
  }

  handleChange = (event) => this.setState({currentValue: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Dodaj komentarz</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentValue} onChange={this.handleChange} />
          <button type="submit">Dodaj komentarz</button>
        </form>
      </div>
    )
  }
}

export default Comments;