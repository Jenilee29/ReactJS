import React, { Component } from 'react'

class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    // inc and dec changes value in web then in console and shows main value
    inc(){
        this.setState({
            count: this.state.count + 1 
        },
        () => {
            console.log('Callback value: ', this.state.count)
        })
        console.log(this.state.count)
    }

    dec(){
        this.setState({
            count: this.state.count - 1 
        },
        () => {
            console.log('Callback value: ', this.state.count)
        })
        console.log(this.state.count)
    }

    inc0(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    inc5(){
        this.inc0()
        this.inc0()
        this.inc0()
        this.inc0()
        this.inc0()
    }

    render() {
    return (
        <div>
            <div>Count: {this.state.count} </div>
            <button onClick={()=> this.inc()}>Increment</button>
            <button onClick={()=> this.dec()}>Decrement</button>
            <button onClick={()=> this.inc5()}>Inc5</button>

        </div>
    )
  }
}

export default Counter