import React, { Component } from 'react';

const TEXT_SECTION_TEXT = 'Treść aplikacji';

class TextSection extends Component {
  render() {
    return (
      <div>
        <p>
          { TEXT_SECTION_TEXT }
        </p>
      </div>
    )
  }
}

export default TextSection;