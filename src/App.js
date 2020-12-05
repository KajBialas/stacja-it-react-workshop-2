import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextSection from './components/TextSection';

const HOME_TEXTS = {
  HEADER: {
    TITLE: 'Aplikacja React',
    SUBTITLE: 'Warsztat Stacja IT'
  }
};

function App() {
  return (
    <div>
      <Header title={HOME_TEXTS.HEADER.TITLE} subtitle={HOME_TEXTS.HEADER.SUBTITLE} />
      <TextSection />
      <Footer />
    </div>
  );
}

export default App;
