import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardImg,
} from 'reactstrap';

class LiveStudent extends Component {
  render() {
    const { firstName, lastName, imageUrl } = this.props.student;

    return (
      <div className='col-3 m-1'>
        <Card className='studentCard'>
            <CardTitle tag='p'>
              {firstName} {lastName}
            </CardTitle>
          <CardImg top width='100%' src={imageUrl} alt='Student Image' className="rounded-circle" />
        </Card>
      </div>
    );
  }
}

export default LiveStudent;
