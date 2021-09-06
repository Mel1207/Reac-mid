import React from 'react';
import './App.css';

function Greetings() {
  return ( 
    <section>
      <h1>Hi this is Melasdfas</h1>
      <Person />
      <Message />
    </section>
  );
}

const Person = () => <h3>This is Mel</h3>
const Message = () => <p>This is my message Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, reprehenderit.</p>

export default Greetings;
