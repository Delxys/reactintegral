import './App.css';
import { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Method from './Components/Method';
import Gr from './gr'
import Graph from './Components/Graph';
import Calculation from './Components/Calculation';
import Calc2 from './Components/Calc2';
import Quiz from './Components/Quiz/Quiz';

class App extends Component{
  
  render(){
    return ( 
      <div>
        <Routes >
          {/* <Route exact="true" path="/" element={<Calculation/>} /> */}
          <Route exact="true" path="/" element={<Calc2/>} /> 
          <Route path="/graph" element={<Gr/>} />
          <Route path="/method" element={<Method/>}/>
          <Route path="/quiz" element={<Quiz/>} />
        </Routes >
 
      </div>
    );
  }

}
export default App;
