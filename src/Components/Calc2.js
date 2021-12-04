import AnswerItem from './AnswerItem.js';
import { Component, useState } from 'react';
import axios from 'axios';
import Input from './Input/Input.js';
import classes from './Calculation.css'

  export default function Calculation() {
    const [ha,setA] = useState(0)
    const [hb,setB] = useState(0)
    const [hN,setN] = useState(0)
    const [hintegral,setIntegral] = useState('')
    const [answerListh,setAnswerList] = useState([])


    const deleteHandler=(index)=>{
    let answerList = answerListh;
    answerList.splice(index,1);
    setAnswerList(answerList.slice());
    }

    const deleteAllHandler=()=>
    {
      const answerListNew=[]
      setAnswerList(answerListNew.slice());
      //this.setState({AnswerList:answerListNew})
    }

    // const validateBordersb=(rb)=>{
    //   return Number(ha)<Number(rb)
    // }
    // const validateN=(n)=>{
    //   return Number(n)%2===0
    // }

    const onIntegralChange=(e)=>{
      var val = e.target.value;
      setIntegral(val)
    }
    const onAChange=(e)=>{
      var val = e.target.value;
      setA(val)
    }
  
    const onBChange=(e)=>{
      var val = e.target.value;
      setB(val)
    }
  
    const onNChange=(e)=>{
      var val = e.target.value;
      setN(val)
    }

  const calculateHandler=()=>{
    let currentList=answerListh;
    let integralVars = {
      a: ha,
      b: hb,
      n: hN,
      integral: hintegral
    };
    const jsonModel = JSON.stringify(integralVars);
    const headers = {
      'Content-Type': 'application/json'
    }
    //REACT_APP_PATH = "http://localhost:56619/api/Integral"  process.env.REACT_APP_PATH
    axios.post("http://localhost:56619/api/Integral" , jsonModel,{
      headers: headers
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        currentList.unshift({answer:res.data.answer, curA: integralVars.a, curB: integralVars.b, curN: integralVars.n});
        setAnswerList(currentList.slice())
        // this.setState({AnswerList:currentList})
        console.log(currentList);
      })
      .catch(error => console.log(error));
      
  }
    let test = answerListh.map((ans,index)=>{
      if(index===0)
        return (<div>
          <AnswerItem answer = {ans.answer} onDelete = {() =>deleteHandler(index)}
          color="lightgreen"
          a = {ans.curA} 
          b = {ans.curB} 
          N = {ans.curN}/>
          </div>);
      return(<div>
      <AnswerItem answer = {ans.answer} onDelete = {() =>deleteHandler(index)}
      color="wheat"
      a = {ans.curA} 
      b = {ans.curB} 
      N = {ans.curN}/>
      </div>);
    });
    return ( 
        <div  >
           <div> 
            <h1>Расчет интеграла</h1>
            <p>Выражение</p><input type = "text" onChange={(e) =>onIntegralChange(e)}></input>
            <p>a</p><input type = "text" onChange={(e) =>onAChange(e)}></input>
            <p>b</p><input type = "text" onChange={(e) =>onBChange(e)}></input>
            <p>N</p><input type = "text" onChange={(e) =>onNChange(e)}></input>
              <br/>
              <button onClick = {() =>calculateHandler()}> Вычислить</button>
              <button onClick ={() =>deleteAllHandler()}> Очистить</button>

            { test }   
          </div>
        </div>
    );
  

}