import React, { Component } from 'react';

const TEXT_SECTION_TEXT = 'Treść aplikacji';

class TextSection extends Component {
  textSectionHeader = 'Sekcja tekstowa';

  handleClick = (value) => console.log(value);

  render() {
    return (
      <div>
        <h3>
          {this.textSectionHeader}
        </h3>
        <p>
          { TEXT_SECTION_TEXT }
        </p>
        <button onClick={() => this.handleClick(10)}>
          console.log
        </button>
      </div>
    )
  }
}

export default TextSection;