import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>This is {person.name} and I'm {person.age}.</h2>
    </div>
  )
}

export default Person