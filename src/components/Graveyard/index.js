import React, { Component } from 'react';
import GraveStone from '../GraveStone';

class Graveyard extends Component {
  render() {
    // console.warn(this.props.deadStudents);

    return (
      <div className='Graveyard d-flex flex-wrap'>
        {this.props.deadStudents.map((student) => (
          <GraveStone key={student.id} student={student} />
        ))}
      </div>
    );
  }
}

export default Graveyard;
