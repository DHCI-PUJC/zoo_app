import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Animals from './pages/Animals';
import AnimalDetails from './pages/AnimalDetails';
import HeaderBar from './components/HeaderBar';
import Who from './pages/Who';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <div className='container-fluid'>
          <Switch>
            <Route path='/' exact>
              <Animals />
            </Route>
            <Route path='/details'>
              <AnimalDetails />
            </Route>
            <Route path='/who' exact>
              <Who />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
