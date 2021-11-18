import { Component } from "react";
import Gr from "../gr";
import img from '../img.PNG';
class Graph extends Component{
  
    render (){

        return( 
            <div className="settings">
                <h1 >График функции</h1>
                <img src={img} alt="image" />
                <br/>
                
            </div>
        );
    }
}
export default Graph;