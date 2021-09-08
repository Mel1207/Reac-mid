// 2 typs of import - named and default import/export
// only 1 default export per module
// think of module as a file

import React from "react";
import { name, age, person } from "./data";
import './styles.css';

function App () {
    return(
        <div>
            <p>This is my content</p>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <p>{person.name}</p>
        </div>
    );
}

export default App