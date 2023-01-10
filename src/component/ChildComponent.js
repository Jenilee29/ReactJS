import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* does not need childName in ParentComponent */}
        {/* <button onClick={() => props.greetHandler('child')}>Greet Parent</button> */}
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent