import React from 'react';
import './App.css';

function Books() {
  return ( 
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImg />
      <Title />
      <Author />
    </article>
  );
}

const CoverImg = () =>  <img src="https://picsum.photos/200" className="img" alt="this is a puppy" />

const Title = () => <h1>The foundation of react components</h1>
const Author = () => <p>by: Mel John Pualon</p>

const Person = () => <h3>This is Mel</h3>
const Message = () => <p>This is my message Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, reprehenderit.</p>

export default Books;
