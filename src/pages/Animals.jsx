import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimals } from '../actions/animal';

import AnimalCard from '../components/AnimalCard';

class Animals extends Component {
  render() {
    return(
      <div className='row'>
        {
          this.props.animals.map(animal => {
            return <div className='col-sm-6 col-md-4' key={animal.id}>
              <AnimalCard animal={animal} />
            </div>
          })
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.getAnimals();
  }
}

const mapActionsToProps = {
  getAnimals
};

const mapStoreToProps = (state) => {
  return {
    animals: state.animal.animals
  };
}

export default connect(mapStoreToProps, mapActionsToProps)(Animals);