// 2 typs of import - named and default import/export
// only 1 default export per module
// think of module as a file

import React from "react";
import Banner from "./components/header/Banner"
import './styles.css';
import { name, age, person } from "./data";

function App () {
    return(
        <div>
            <Banner />
            <p>This is my content</p>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <p>{person.name}</p>
        </div>
    );
}


// ---------------------------------- another way to import ---------------------------------- //
// ---------------------------------- another way to import ---------------------------------- //
// ---------------------------------- another way to import ---------------------------------- //
// import * as data from "./data"
// function App () {
//     return(
//         <div>
//             <p>This is my content</p>
//             <h1>Name: {data.name}</h1>
//             <h2>Age: {data.age}</h2>
//             <p>{data.person.name}</p>
//         </div>
//     );
// }

export default App