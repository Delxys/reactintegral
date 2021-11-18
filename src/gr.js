 import { Component} from 'react';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Plot from 'react-function-plot';
const data = [
  {
    name: '-2',
    x: -2,
    y: -8,
    amt: 2400,
  },
  {
    name: '-1.5',
    x: -1.5,
    y: -2.25,
    amt: 2210,
  },
  {
    name: '-1',
    x: -1,
    y: -0.5,
    amt: 2290,
  },
  {
    name: '-0.5',
    x: -0.5,
    y: -0.05,
    amt: 2000,
  },
  {
    name: '0',
    x: 0,
    y: 0,
    amt: 2181,
  },
  {
    name: '0.5',
    x: 0.5,
    y: 0.0357,
    amt: 2500,
  },
  {
    name: '1',
    x: 1,
    y: 0.25,
    amt: 2500,
  },
  {
    name: '1.5',
    x: 1.5,
    y: 0.75,
    amt: 2500,
  },
  {
    name: '2',
    x: 2,
    y: 1.6,
    amt: 2100,
  },
];

class myFunction extends Component{
  function(x) {  return x*x*x/(x+3)}

}
class Gr extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     expression: 'x * x',
  //     easingName: 'easeOutQuad'
  //   };
  // }
  render() {
    return (
      <div>
        <h1 >График функции</h1>
        <div style={{width: "66%", marginLeft: "25%"}}>
          <LineChart
            width={800}
            height={800}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
          </div>
        </div>
//       <Plot
//   className='myPlot'
//   fn={(x)=>x*x}
//   thickness={4}
// />
    );
  }
}


export default Gr;