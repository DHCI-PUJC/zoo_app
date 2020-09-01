import React, { Component } from 'react';
import './App.css';

import AnimalCard from './components/AnimalCard';
import HeaderBar from './components/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <div className='container-fluid'>
          <div className='row'>
            {
              this.state.animals.map(animal => {
                return <div className='col-sm-4'>
                  <AnimalCard
                    key={animal.id}
                    name={animal.name}
                    description={animal.description}
                    img={animal.img} />
                </div>
              })
            }
          </div>
        </div>
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
  } 
}

export default App;
