import React, { Component } from 'react'
import './Counter.css'
import { Button, Form } from 'react-bootstrap'


class Counter extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    //     console.log("Initialisation")
    // }

    state = {
        count: 0,
        inputText: "",
    }

    // Increment Counter 
    handleClickAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    // Decrement Counter 

    handleClickMinus = () => {
        this.state.count > 0 &&
            this.setState({
                count: this.state.count - 1
            })
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    // Component life cycle
    componentDidMount = () => {
        console.log("Component did mount")
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component did update")
        console.log(prevState)
    }

    componentWillUnmount = () => {
        console.log("Component will Unmout")
    }

    render() {
        console.log("Component Render")
        return (
            <div>
                <h1>This is a Counter :</h1>
                <div className="counterContent">
                    <Button variant="success"
                        onClick={this.handleClickAdd}
                    >+</Button>
                    <h2>{this.state.count}</h2>
                    <Button variant="success"
                        onClick={this.handleClickMinus}
                    >-</Button>
                </div>
                { }
                <Form.Control type="text"
                    onChange={this.handleChange}
                    placeholder="Enter text  ..." />
                <h3>{this.state.inputText}</h3>
            </div >
        )
    }
}

export default Counter
