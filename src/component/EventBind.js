import React, { Component } from 'react'

class EventBind extends Component {
    // for 1st and 2nd method
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      message: 'Hello'
    //   }
    // }

    // for 3rd method is the best method
    constructor(props) {
        super(props)
      
        this.state = {
           message: 'Hello'
        }
        // Comment for 4th method to be use
        // this.clickHandler = this.clickHandler.bind(this)
      }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    // 4th method
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }
    
    render() {
        return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* <button onClick={() => this.clickHandler()}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
    }

export default EventBind