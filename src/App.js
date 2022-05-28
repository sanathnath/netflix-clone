import React from 'react'
import './App.css';
import {originals, action, comedy, horror} from './urls';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Posters from './Components/Posters/Posters';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Posters title='Netflix originals' url={originals} originals/>
      <Posters title='Action' url={action}/>
      <Posters title='Comedy' url={comedy}/>
      <Posters title='Horror' url={horror}/>
      
    </div>
  );
}

export default App;
