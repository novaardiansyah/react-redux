import React from 'react';

const student = ({ students, deleteStudent }) => {
	const response = students.map(data => {
	  if (data.age >= 10) {
  	  return (
  	    <div className="student" key={ data.id }>
    			<div>Full Name: { data.name }</div>
    			<div>Age: { data.age } years old</div> 
    			<div>Skill: { data.skill }</div>
    			<div>Hobby: { data.hobby }</div>
    			<button onClick={() => { deleteStudent(data.id) }}>delete</button>
    			<br/> 
    		</div>
  	  )
	  } else {
	    return null;
	  }
	});
	
	return (
		<div className="students">
			{ response }
		</div>
	)
}

export default student;