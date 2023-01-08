import React from 'react'

// function Greet02(){
//     return <h1>Hello Jenilee</h1>
// }

// ES6
const Greet02 = props => {
    console.log(props)
    // without children
    // return <h1>Hello {props.name} a.k.a {props.heroElem}</h1>   
    
    // with children
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.heroElem}</h1>   
            {props.children}
        </div>
    )}

export default Greet02;