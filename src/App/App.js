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
    const { livingStudents, deadStudents } = this.state;
    return (
      <div className='App'>
        <div className='attack'>
          <button className='btn btn-danger' onClick={this.sharkAttack}>SHARK ATTACK</button>
        </div>
        <div className='gridContainer'>
          <div className='tank'>
            <h2 className='tankHeader'>Shark Tank</h2>
            <SharkTank livingStudents={livingStudents} />
          </div>
          <div className='yard'>
            <h2 className='yardHeader'>Graveyard</h2>
            <Graveyard deadStudents={deadStudents} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
