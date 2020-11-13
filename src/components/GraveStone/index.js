import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardImg,
} from 'reactstrap';

class DeadStudent extends Component {
  render() {
    const { firstName, lastName, imageUrl } = this.props.student;

    return (
      <div className='col-3 m-1'>
        <Card className='graveCard' >
            <CardTitle tag='p'><del>
              {firstName} {lastName}
              </del>
            </CardTitle>
          <CardImg top width='100%' src={imageUrl} alt='Student Image' className="rounded-circle" />
        </Card>
      </div>
    );
  }
}

export default DeadStudent;
