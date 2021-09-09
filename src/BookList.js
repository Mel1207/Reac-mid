import React, { Component } from 'react'
import Book from './Book'
import booksData from './BookData'


export default class BookList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            books: booksData
        }
    }

    // this.setState({})
    render() {
        // const books = this.state.books.map(item => item.book);
        // console.log(books)

        // books.map(item => {
        //     item.book
        // })

        // filter
        // foreach
        // map
        // reduce

        return (
            <section>
                <h3>This is our Booklist</h3>
                {this.state.books.map((item, i) => <Book key={i} info={item}></Book>)}
                {/* react looks for something unique key or id for every array of component we will generate */}
                {/* <Book /> */}

                {/* bad practice */}
                {/* <Book book={this.books[1]} /> */}
                {/* <Book book={this.books[2]} /> */}
            </section>
        )
    }
}
