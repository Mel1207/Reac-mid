import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        console.log(this.props);
        const {img, book, author} = this.props.info;

        return (
            <div className="book-card">
                <img src={img} width="200" alt="book" />

                <div>
                    <h4>Title: {book} </h4>
                    <h5>Author: {author} </h5>
                </div>
            </div>
        )
    }
}
