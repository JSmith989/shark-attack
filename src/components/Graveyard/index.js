import React, { Component } from 'react';
import GraveStone from '../GraveStone';

class Graveyard extends Component {
  render() {
    return (
      <div className='graveyard d-flex flex-wrap'>
        {this.props.deadStudents.map((student) => (
          <GraveStone key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

export default Graveyard;
