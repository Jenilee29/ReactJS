import React from 'react'
import Person from './Person'

function NameList() {
    const people = [
        {
            id: 1,
            name: 'Jen',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ann',
            age: 24,
            skill: 'Laravel'
        },
        {
            id: 3,
            name: 'Vin',
            age: 26,
            skill: 'Java'
        }
    ]

    const personList = people.map(person => <Person key={person.id} person={person}/> )

    // const personList = people.map(person => (
    //     <h2>This is {person.name} and I'm {person.age}.</h2> 
    // ))
    return <div>{personList}</div>
    
    // array                                         
    // const names = ['Jen','Ann','Vin']
    // const nameList = names.map(name => <h2>{name}</h2>) 
    
    // return (
    //     <div>
    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //         <h2>{names}</h2>    
    //         {names.map(name => <h2>{name}</h2>)} 
    //         {nameList}
    //     </div>
    // )
}

export default NameList