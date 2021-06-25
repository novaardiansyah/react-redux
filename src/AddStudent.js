import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    name: null,
    age: null,
    skill: null,
    hobby: null
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" onChange={ this.handleChange } /><br/>
          
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={ this.handleChange } /><br/>
          
          <label htmlFor="skill">Skill:</label>
          <input type="text" id="skill" onChange={ this.handleChange } /><br/>
          
          <label htmlFor="hobby">Hobby:</label>
          <input type="text" id="hobby" onChange={ this.handleChange } />
          
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== */