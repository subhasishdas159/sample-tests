import React, {useState} from 'react';

const Bio = (props) => {
	const [feelings, setFeelings] = useState("nice")
  return (
    <div>
    	<h4 className="header">My name is {props.name}</h4>
    	<p>My age is {props.age}</p>
    	<p className="feeling">I am feeling {feelings}</p>
    	<button onClick={() => setFeelings("very nice")}>click me</button>
    </div>
  )
}

export default Bio;