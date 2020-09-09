import React, { Component } from 'react';

class AnimalDetails extends Component {
  render() {
    return(
      <div>
        <p>{this.props.animal.name}</p>
        <p>{this.props.animal.description}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('Did Mount AnimalDetails!');
  }
}

export default AnimalDetails;