import React from 'react';

const Bio = (props) => {
  return (
    <div>
    	<h4>My name is {props.name}</h4>
    	<p>My age is {props.age}</p>
    </div>
  )
}

export default Bio;