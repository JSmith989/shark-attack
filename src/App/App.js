import React from 'react';
import './App.scss';
import SharkTank from '../components/SharkTank';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: studentData.livingStudents(),
    deadStudents: studentData.dearlyBeloved(),
  };

  sharkAttack = () => {
    if (this.state.livingStudents.length) {
      const randomStudent = this.state.livingStudents[
        Math.floor(Math.random() * this.state.livingStudents.length)
      ].id;
      studentData.followTheLight(randomStudent);
      this.setState({
        livingStudents: studentData.livingStudents(),
        deadStudents: studentData.dearlyBeloved(),
      });
    }
  };

  render() {
    const { livingStudents } = this.state;
    return (
      <div className='App'>
        <button onClick={this.sharkAttack}>SHARK ATTACK</button>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
