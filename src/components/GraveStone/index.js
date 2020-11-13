import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
} from 'reactstrap';

class DeadStudent extends Component {
  render() {
    const { firstName, lastName, imageUrl } = this.props.student;

    return (
      <div className='col-3 border border-danger'>
        <Card>
          <CardBody>
            <CardTitle tag='p'>
              {firstName} {lastName}
            </CardTitle>
          </CardBody>
          <CardImg top width='100%' src={imageUrl} alt='Student Image' className="rounded-circle" />
        </Card>
      </div>
    );
  }
}

export default DeadStudent;
