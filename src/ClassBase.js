import React, { Component } from "react"
import { name } from "./data"

// export default function ClassBase () {
//     return (
//         <div>
//             hey hey hey asdfa
//         </div>
//     )
// }

class ClassBase extends Component{
    render() {
        return (
            <div>
                <h1>This is the banner imported and data name: {name} imported from on class base component</h1>
            </div>
        )
    }
}

export default ClassBase
