import React from 'react';

const HEADER_TEXT = 'Aplikacja React';

function Header() {
  const additionalHeaderText = 'Warsztat StacjaIT'

  return (
    <header>
      <h1>
        {HEADER_TEXT}
      </h1>
      <h2>
        {additionalHeaderText}
      </h2>
    </header>
  )
}

export default Header;

