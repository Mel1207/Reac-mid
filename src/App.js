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
      <TextBody />
    </article>
  );
}

const CoverImg = () =>  <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" className="img" alt="this is a puppy" />

const Title = () => <h1 style={{fontSize: '18px', marginBottom: '10px'}}>The foundation of react components</h1>

const authorStyle = {
  color: '#747474',
  letterSpacing: '1px'
}

const textStyle = {
  color: '#747474',
  fontSize: '15px',
  marginTop: '15px',
  textAlign: 'left'
}

const Author = () => <p style={authorStyle}>by: Mel John Pualon</p>
const TextBody = () => {
  return(
    <p style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio omnis mollitia adipisci impedit magni labore qui consectetur officiis delectus!</p>
  );
}

export default Books;
