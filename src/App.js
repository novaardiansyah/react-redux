import React, { Component } from 'react';
import Student from './Student';
import AddStudent from './AddStudent';

class App extends Component {
  state = {
    students: [
      {
      	id: 1,
        name: 'nova ardiansyah',
        age: 19,
        skill: 'web programming',
        hobby: 'watching tutorial videos'
      },
      {
      	id: 2,
        name: 'aditya saputra',
        age: 12,
        skill: 'drawing',
        hobby: 'playing games'
      },
    ]
  }
  
  addStudent = (student) => {
    student.id = Math.floor(Math.random() * 255 * 255);
    let students = [...this.state.students, student];
    
    this.setState({ students });
    console.log(student);
  }
  
  deleteStudent = (id) => {
    console.log(id);
    const students = this.state.students.filter((student) => {
                       return student.id !== id
                     });
    this.setState({ students });
  }
  
  componentDidMount() {
    console.log('component mounted');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  
  render() {
    return (
      <div className="App">
        <h1>my first react app</h1>
        <Student students={ this.state.students } deleteStudent={ this.deleteStudent } />    
        <AddStudent addStudent={ this.addStudent } /> 
      </div>
    );
  }
}

export default App; 
/* ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== */