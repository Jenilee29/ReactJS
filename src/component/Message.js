import React, {Component} from "react";

class Message extends Component{

    constructor (){
        super()
        this.state = {
            Message: 'Class Message visitor'
        }
    }

    changeMessage(){
        this.setState({
            Message: 'Thank you for subscribing!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }}

    //destructuring state
    // render(){
    //     const {Message} = this.state
    //     return(
    //         <div>
    //             <h1>{Message}</h1>
    //             <button onClick={() => this.changeMessage()}>Subscribe</button>
    //         </div>
    //     ) 
    // }}

export default Message;