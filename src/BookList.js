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

    handleDelete = () => {
        console.log('im from parent component')
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
            <section className="section">
                {this.state.books.map((item, i) => <Book key={i} info={item} handleDelete={this.handleDelete}></Book>)}
                {/* react looks for something unique key or id for every array of component we will generate */}
                {/* <Book /> */}

                {/* bad practice */}
                {/* <Book book={this.books[1]} /> */}
                {/* <Book book={this.books[2]} /> */}
            </section>
        )
    }
}
