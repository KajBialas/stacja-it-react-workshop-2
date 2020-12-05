import React, { Component } from 'react';

class Comments extends Component {
  state = {
    currentValue: '',
    comments: [],
  }

  handleChange = (event) => this.setState({currentValue: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.currentValue],
      currentValue: '',
    })
  }

  renderComments = () => this.state.comments.map((comment, index) => <div key={index}>{comment}</div>);

  render() {
    return (
      <div>
        <h3>Dodaj komentarz</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.currentValue} onChange={this.handleChange} />
          <button type="submit">Dodaj komentarz</button>
        </form>
        <h3>Lista komentarzy</h3>
        {this.renderComments()}
      </div>
    )
  }
}

export default Comments;