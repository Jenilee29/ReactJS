import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    render() {
        // render the div if true then nothing when false
        return this.state.isLoggedIn && <div>Hello User</div>

        // return(
        //     this.state.isLoggedIn ? (<div>Hello User</div> ) : (<div>Welcome Guest</div>)
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello User</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // } 
        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return <div>Hello User</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting