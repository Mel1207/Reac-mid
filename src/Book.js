import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props) {
        super(props)
        // this.handleClic = this.handleClic.bind(this)

        this.state={
            count: 1
        }
    }

 

    // handleClic() {
    //     console.log('clicked')
    //     console.log(this.state.count)
    // }
    handleClic = () => {
        console.log('clicked!')
        console.log(this.state.count)
    }

    render() {
        // console.log(this.props);
        const {img, book, author} = this.props.info;

        return (
            <div className="book-card">
                <img src={img} width="200" alt="book" />

                <div>
                    <h4>Title: {book} </h4>
                    <h5>Author: {author} </h5>
                    <button onClick={this.handleClic}>Add count</button>
                </div>
            </div>
        )
    }
}
