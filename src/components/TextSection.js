import React, { Component } from 'react';


class TextSection extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.title}
        </h3>
        <p>
          { this.props.text }
        </p>
      </div>
    )
  }
}

export default TextSection;