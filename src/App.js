import React from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Navbar from './components/Navbar';
import './styles/App.scss';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Card />
    </div>
  );
}

export default App;
