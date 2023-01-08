import React from "react";

const Hello = () => {
    // This is JSX
    // return(
    //     <div /*id= 'lib', className= 'jslib'*/>
    //         <h1>Hello JSX</h1>
    //     </div>
    // )

    // Not JSX but JS Library
    // (3 parameters) html tag to be rendered, attributes like id, children of html element 
    return React.createElement(
        'div', 
        null, /*{id: 'lib', className: 'jslib'}*/ 
        React.createElement('h1', null, 'Hello JS Library') 
    )}

export default Hello;