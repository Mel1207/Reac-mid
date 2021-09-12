import React, { Component } from 'react'
import Button from './Button'

export default class Book extends Component {
    constructor(props) {
        super(props)
        // this.handleClic = this.handleClic.bind(this)

        this.state={
            count: 0
        }
    }

    // handleClic() {
    //     console.log('clicked')
    //     console.log(this.state.count)
    // }
    addCount = () => {
        console.log('clicked!')
        // not a proper way
        // this.state = {
        //     count: this.state.count + 1
        // }

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    lowerCount = () => {
        console.log('clicked!')

        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }
    resetCount = () => {
        console.log('clicked!')

        this.setState({
            count: this.state.count = 0
        })
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
                    <h3>count: {this.state.count}</h3>
                    <Button />
                </div>
            </div>
        )
    }
}
