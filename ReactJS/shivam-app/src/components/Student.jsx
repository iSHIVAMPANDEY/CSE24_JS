import React from 'react'

function Student(props) {
  return (
    <div>
      <h1>Your name is {props.name}</h1>
      <p>Your age is {props.age}</p>
      <p>Your Roll no is {props.rollno}</p>
      <p>Your Branch is {props.branch}</p>
    </div>
  )
}

export default Student
