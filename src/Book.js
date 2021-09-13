import React, { Component } from 'react'


export default class Book extends Component {
    constructor(props) {
        super(props)
        // this.handleClic = this.handleClic.bind(this)

        this.state = {
            count: 0,
            name: "john",
            showInfo: true
        }
    }

    // handleClic() {
    //     console.log('clicked')
    //     console.log(this.state.count)
    // }
    // addCount = () => {
    //     console.log('clicked!')
    //     // not a proper way
    //     // this.state = {
    //     //     count: this.state.count + 1
    //     // }

    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)
    // }
    // lowerCount = () => {
    //     console.log('clicked!')

    //     this.setState({
    //         count: this.state.count - 1
    //     })
    //     console.log(this.state.count)
    // }
    // resetCount = () => {
    //     console.log('clicked!')

    //     this.setState({
    //         count: this.state.count = 0
    //     })
    //     console.log(this.state.count)
    // }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        // console.log(this.props);
        const {img, book, author, id} = this.props.info;
        // const {handleDelete} = this.props

        const checkInfo = (info) => {
            if(info === true) {
                return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non.</p>
            } else {
                return null
            }
        }


        return (
            <div className="book-card">
                <img src={img} width="200" alt="book" />

                <div>
                    <h4>Title: {book} </h4>
                    <h5>Author: {author} </h5>
                    <h3>count: {this.state.count}</h3>
                    {/* <button type='button' onClick={() => handleDelete(id)}>Delete me</button> */}
                    <button type="button" onClick={this.handleInfo}>Toggle info</button>
                    {checkInfo(this.state.showInfo)}

                    {/* {this.state.showInfo ? (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatum?</p>
                    ) : null} */}

                    {/* {
                        this.state.showInfo && (
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, similique?</p>
                        )
                    } */}
                </div>
            </div>
        )
    }
}
