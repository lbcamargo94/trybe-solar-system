import React from 'react';
import Header from './Components/Header';
import SolarSystem from './Components/SolarSystem';
import Missions from './Components/Missions';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
