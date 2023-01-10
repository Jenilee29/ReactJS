import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name, heroElem} = this.props
        return <h1>Class Welcome {name} a.k.a {heroElem}</h1>
    }
}

export default Welcome;