import React, { Component } from 'react';

const TEXT_SECTION_TEXT = 'Treść aplikacji';

class TextSection extends Component {
  textSectionHeader = 'Sekcja tekstowa';

  render() {
    return (
      <div>
        <h3>
          {this.textSectionHeader}
        </h3>
        <p>
          { TEXT_SECTION_TEXT }
        </p>
      </div>
    )
  }
}

export default TextSection;