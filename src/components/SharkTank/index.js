import React, { Component } from 'react';
import LiveStudent from '../LiveStudent';

class SharkTank extends Component {
  render() {
    // console.warn(this.props.livingStudents);

    return <div className='sharkTank d-flex flex-wrap'>{this.props.livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ))}</div>;
  }
}

export default SharkTank;
