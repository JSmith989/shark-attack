import React from 'react';
import './App.scss';
import SharkTank from '../components/SharkTank';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: studentData.livingStudents(),
    deadStudents: studentData.dearlyBeloved(),
  };

  render() {
    const { livingStudents } = this.state;
    return (
      <div className='App'>
        <h2>SHARK ATTACK</h2>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
