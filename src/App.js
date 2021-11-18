import './App.css';
import { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Method from './Components/Method';
import Gr from './gr'
import Graph from './Components/Graph';
import Calculation from './Components/Calculation';

class App extends Component{
  
  render(){
    return ( 
      <div>
        <Routes >
          <Route exact="true" path="/" element={<Calculation/>} />
          <Route path="/graph" element={<Gr/>} />
          <Route path="/method" element={<Method/>}/>
        </Routes >
 
      </div>
    );
  }

}
export default App;
