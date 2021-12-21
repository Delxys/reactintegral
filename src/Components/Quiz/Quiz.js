import {Component} from 'react'
import axios from 'axios';
import classes from './Quiz.css'
import CurrentQuestion from '../CurrentQuestion/CurrentQuestion'
class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      // {
      //   questionNumber:1,
      //   question:'В чем ограничение метода Симпсона?',
      //   rightAnswerId:2,
      //   answers: [
      //     {text: 'Невозможность задания границ дробными чилами', id:1},
      //     {text: 'Четное число разбиений', id:2},
      //     {text: 'Невозможность изменять границы', id:3},
      //     {text: 'Погрешность более 0.01', id:4}
      //   ]
      // },
      // {
      //   questionNumber:2,
      //   question:'Неопределенный интеграл от функции - это...',
      //   rightAnswerId:3,
      //   answers: [
      //     {text: 'площадь криволинейной трапеции, ограниченной графиком функции, осью абсцисс и еще двумя прямыми', id:1},
      //     {text: 'одна первообразная функции', id:2},
      //     {text: 'совокупность всех производных функции', id:3},
      //     {text: 'промежуток, на котором необходимо проинтегрировать функцию', id:4}
      //   ]
      // },
      // {
      //   questionNumber:3,
      //   question:'Чему равен неопределенный интеграл от 1?',
      //   rightAnswerId:1,
      //   answers: [
      //     {text: 'x+C', id:1},
      //     {text: '0', id:2},
      //     {text: '1+С', id:3},
      //     {text: 'С', id:4}
      //   ]
      // }
    ]
  }

  onAnswerClickHandler=(answerId)=>{
  console.log(answerId)
  if(this.state.activeQuestion+1===this.state.quiz.length)
    console.log('finished')
    else{
      this.setState({
        activeQuestion: this.state.activeQuestion+1
      })
    }
 
  }
  getQuiz=()=>{
    const headers = {
      'Content-Type': 'application/json'
    }
    //REACT_APP_PATH = "http://localhost:56619/api/quiz"  process.env.REACT_APP_PATH
    axios.post("http://localhost:56619/api/Integral/quiz" , {
      headers: headers
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({quiz:res.data.questionList})
      })
      .catch(error => console.log(error));
  }
  render() {
    let test = this.state.quiz.map((question,index)=>{
        return (<div>
          <CurrentQuestion 
              answers={this.state.quiz[this.state.activeQuestion].answers}
              questiontext={this.state.quiz[this.state.activeQuestion].questiontext}
              quizLenght = {this.state.quiz.length}
              answerNumber = {this.state.activeQuestion+1 }
              onAnswerClick={this.onAnswerClickHandler}
            />
          </div>);
    });
    return ( 
      <div>
        <h1>Тест</h1>

        <button onClick = {() =>this.getQuiz()}> Начать</button>
        <div className={'Quiz'}>
          
          <div className={'QuizWrapper'}>
          {test}
          </div>
        </div>
      </div>
    )
  }
}


export default Quiz