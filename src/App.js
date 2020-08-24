import React, { Component } from 'react';
import './App.css';

import AnimalCard from './components/AnimalCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.state.animals.map(animal => {
            return <AnimalCard
              key={animal.id}
              name={animal.name}
              description={animal.description}
              img={animal.img} />
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
      }]
    }
  } 
}

export default App;
