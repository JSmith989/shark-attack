import React from 'react';
import './App.scss';
import SharkTank from '../components/SharkTank';
import studentData from '../helpers/data/studentData';
import Graveyard from '../components/Graveyard';

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
    console.warn(this.state.deadStudents);
    const { livingStudents, deadStudents } = this.state;
    return (
      <div className='App'>
        <h2>Shark Tank</h2>
        <button onClick={this.sharkAttack}>SHARK ATTACK</button>
        <SharkTank livingStudents={livingStudents} />
        <h2>Graveyard</h2>
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
