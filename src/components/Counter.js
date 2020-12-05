import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 10,
  }

  handleIncrement = () => this.setState({counter: this.state.counter + 1});
  // handleIncrement = () => this.setState(prevState => ({counter: prevState.counter + 1}));

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter;