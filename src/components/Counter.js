import React, { Component } from 'react';
import Button from './Button';
import TextSection from './TextSection';

const COUNTER_INIT_VALUE = 10;

const COUNTER_TEXTS = {
  TITLE: 'Counter',
  BUTTONS: {
    INCREMENT: '+',
    DECREMENT: '-',
    RESET: 'RESET',
  }
}

class Counter extends Component {
  state = {
    counter: COUNTER_INIT_VALUE,
  }

  handleIncrement = () => this.setState({counter: this.state.counter + 1});
  handleDecrement = () => this.setState({counter: this.state.counter -1});
  handleReset = () => this.setState({counter: COUNTER_INIT_VALUE});
  // handleIncrement = () => this.setState(prevState => ({counter: prevState.counter + 1}));

  componentDidMount() {
    console.log('did mount')
  }

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    console.log('render');
    return (
      <div>
        <TextSection title={COUNTER_TEXTS.TITLE} text={this.state.counter} />
        <Button handleClick={this.handleIncrement} text={COUNTER_TEXTS.BUTTONS.INCREMENT} />
        <Button handleClick={this.handleDecrement} text={COUNTER_TEXTS.BUTTONS.DECREMENT} />
        <Button handleClick={this.handleReset} text={COUNTER_TEXTS.BUTTONS.RESET} />
      </div>
    )
  }
}

export default Counter;