import React from 'react';
import './App.css';

function Books() {
  return ( 
    <section className="books-container">
      <Book />
      <Book />
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

const CoverImg = () =>  <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" className="img" alt="this is a puppy" />

const Title = () => <h1 style={{fontSize: '18px', marginBottom: '10px'}}>The foundation of react components</h1>

const authorStyle = {
  color: '#747474',
  letterSpacing: '1px'
}

const Author = () => <p style={authorStyle}>by: Mel John Pualon</p>

const Person = () => <h3>This is Mel</h3>
const Message = () => <p>This is my message Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, reprehenderit.</p>

export default Books;
