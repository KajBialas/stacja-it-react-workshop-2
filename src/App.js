import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextSection from './components/TextSection';
import Counter from './components/Counter';

const HOME_TEXTS = {
  HEADER: {
    TITLE: 'Aplikacja React',
    SUBTITLE: 'Warsztat Stacja IT'
  },
  TEXT_SECTION1: {
    TITLE: 'Nagłówek 1',
    TEXT: 'Przykładowy tekst',
  },
  TEXT_SECTION2: {
    TITLE: 'Nagłówek 2',
    TEXT: 'Przykładowy tekst 2',
  },
};

function App() {
  return (
    <div>
      <Header title={HOME_TEXTS.HEADER.TITLE} subtitle={HOME_TEXTS.HEADER.SUBTITLE} />
      <Counter />
      <TextSection title={HOME_TEXTS.TEXT_SECTION1.TITLE} text={HOME_TEXTS.TEXT_SECTION1.TEXT} />
      <TextSection title={HOME_TEXTS.TEXT_SECTION2.TITLE} text={HOME_TEXTS.TEXT_SECTION2.TEXT} />
      <Footer />
    </div>
  );
}

export default App;
