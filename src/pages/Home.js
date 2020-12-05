import React from 'react';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostDetails from '../components/PostDetails';
import PostList from '../components/PostList';
import Comments from '../components/Comments';

const HOME_TEXTS = {
  TEXT_SECTION1: {
    TITLE: 'Nagłówek 1',
    TEXT: 'Przykładowy tekst',
  },
  TEXT_SECTION2: {
    TITLE: 'Nagłówek 2',
    TEXT: 'Przykładowy tekst 2',
  },
};

function Home() {
  return (
    <div>

      <PostDetails />
      <Comments />
      <PostList />
      <Counter />
      <TextSection title={HOME_TEXTS.TEXT_SECTION1.TITLE} text={HOME_TEXTS.TEXT_SECTION1.TEXT} />
      <TextSection title={HOME_TEXTS.TEXT_SECTION2.TITLE} text={HOME_TEXTS.TEXT_SECTION2.TEXT} />

    </div>
  );
}

export default Home;
