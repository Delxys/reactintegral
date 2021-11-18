import AnswerItem from './AnswerItem.js';
import { Component } from 'react';
import axios from 'axios';
import Input from './Input/Input.js';
import classes from './Calculation.css';
import {connect} from 'react-redux';
import {Calculate, DeleteAll,Delete} from '../redux/actions/actions'
import {Calculator} from '../redux/reducers/RootReducer'
class Calculation extends Component{
  
  constructor (props){
    super(props);

    this.state={
      formControls: {
        integral: {
          value: 'x*x',
          type: 'integral',
          label: 'Выражение',
          errorMessage: 'Введите корректное выражение с x',
          valid: false,
          touched: false,
          validation: {
            required: true,
            integral: true,
            minLength:3
          }
        },
        a: {
          value: '',
          type: 'border',
          label: 'Левая граница',
          errorMessage: 'Введите корректную левую границу',
          valid: false,
          touched: false,
          validation: {
            required: true,
            a: true
          }
        },
        b: {
          value: '',
          type: 'right border',
          label: 'Правая граница',
          errorMessage: 'Введите корректные границы',
          valid: false,
          touched: false,
          validation: {
            required: true,
            b:true,
          }
        },
        N: {
          value: '',
          type: 'Number',
          label: 'N',
          errorMessage: 'Введите четное число разбиений',
          valid: false,
          touched: false,
          validation: {
            required: true,
            N: true
          }
        }
      }
    }
    // this.deleteAllHandler=this.deleteAllHandler.bind(this);
    // this.calculateHandler=this.calculateHandler.bind(this);
  }

  deleteHandler(index){
    this.props.onDel(index)
    // let answerList = this.state.AnswerList;
    // answerList.splice(index,1);
    // this.setState({AnswerList:answerList});
  }

  validateBordersb(rb){
    return Number(this.state.formControls.a.value)<Number(rb)
  }
  validateN(n){
    return Number(n)%2===0
  }
  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.b) {
      isValid = this.validateBordersb(value) && isValid
    }
    if (validation.N) {
      isValid = this.validateN(value) && isValid
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler(event, controlName) {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls
    })
  }
  submitHandler = event => {
    event.preventDefault()
  }
  // myFunc(pos){
  //   let tmp = pos*pos*pos/(3.0+pos)
  //   return tmp;
  // }
  // calculateHandler(){
  //   let currentList=this.state.AnswerList;
  //   let result = 0;
    
  //   let a = this.state.formControls.a.value;
  //   let b = this.state.formControls.b.value;
  //   let n = this.state.formControls.N.value;
  //   let h = (b - a)/n;
  //   for (let i = 1; i < n - 1; i++)
  //     result += +h * (this.myFunc(+a + (+h * +i)));
  //   result += (h * ((this.myFunc(+a) + this.myFunc(+b)) / +2));
  //   currentList.unshift({answer:result, curA: a, curB: b, curN: n});
  //   this.setState({AnswerList:currentList})
  // }
  calculateHandler=()=>{
    
    let currentList=this.props.AnswerList;
    let integralVars = {
      a: this.state.formControls.a.value,
      b:  this.state.formControls.b.value,
      n: this.state.formControls.N.value,
      integral: this.state.formControls.integral.value
    };
    const jsonModel = JSON.stringify(integralVars);
    const headers = {
      'Content-Type': 'application/json'
    }
    //REACT_APP_PATH = "http://localhost:56619/api/Integral"  process.env.REACT_APP_PATH
    axios.post("http://localhost:56619/api/Integral", jsonModel,{
      headers: headers
    })
      .then(res => {
        console.log(res.data);
        currentList.unshift({answer:res.data.answer, curA: integralVars.a, curB: integralVars.b, curN: integralVars.n});
        console.log(currentList);
        this.props.onCalc(currentList)
        // this.setState({AnswerList:currentList})
      })
      .catch(error => console.log(error));

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  } 
  render(){
   
    let test = this.props.AnswerList.map((ans,index)=>{
      if(index===0)
        return (<div>
          <AnswerItem answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
          color="lightgreen"
          a = {ans.curA} 
          b = {ans.curB} 
          N = {ans.curN}/>
          </div>);
      return(<div>
      <AnswerItem answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
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
            <form onSubmit={this.submitHandler} className={classes.CalculationForm}>
            { this.renderInputs() }
              <br/>
              <button onClick = {this.calculateHandler} > Вычислить</button>
              <button onClick ={this.props.onDelAll}> Очистить</button>
            </form>
            { test }   
          </div>
        </div>
    );
  }

}
function mapStateToProps(state1){
  return {
    AnswerList: state1.AnswerList,
  }
}

function mapDispatchToProps(dispatch){
  return{
    onCalc: (curList) => dispatch(Calculate(curList)),
    onDelAll: () => dispatch(DeleteAll()),
    onDel: (index) => dispatch(Delete(index))
  }

}


export default connect(mapStateToProps, mapDispatchToProps) (Calculation)
