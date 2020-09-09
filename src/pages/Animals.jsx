import React, { Component } from 'react';

import AnimalCard from '../components/AnimalCard';

class Animals extends Component {
  render() {
    return(
      <div className='row'>
        {
          this.state.animals.map(animal => {
            return <div className='col-sm-4' key={animal.id}>
              <AnimalCard
                onAnimalsSelect={this.onAnimalsSelect} 
                animal={animal} />
            </div>
          })
        }
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      animals: [{
        id: 1,
        name: 'León',
        description: 'Descripción del león',
        img: ''
      }, {
        id: 2,
        name: 'Zorro',
        description: 'Descripción del zorro',
        img: ''
      }, {
        id: 3,
        name: 'Tigre',
        description: 'Descripción del tigre',
        img: ''
      }, {
        id: 4,
        name: 'Cebra',
        description: 'Descripción del Cebra',
        img: ''
      }]
    }

    this.onAnimalsSelect = this.onAnimalsSelect.bind(this);
  }

  onAnimalsSelect(animal) {
    this.props.onAppAnimalSelect(animal);
  }
}

export default Animals;