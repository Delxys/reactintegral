import {Component} from 'react'
import classes from './Quiz.css'
import CurrentQuestion from '../CurrentQuestion/CurrentQuestion'
class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        questionNumber:1,
        question:'В чем ограничение метода Симпсона?',
        rightAnswerId:2,
        answers: [
          {text: 'Невозможность задания границ дробными чилами', id:1},
          {text: 'Четное число разбиений', id:2},
          {text: 'Невозможность изменять границы', id:3},
          {text: 'Погрешность более 0.01', id:4}
        ]
      },
      {
        questionNumber:2,
        question:'Неопределенный интеграл от функции - это...',
        rightAnswerId:3,
        answers: [
          {text: 'площадь криволинейной трапеции, ограниченной графиком функции, осью абсцисс и еще двумя прямыми', id:1},
          {text: 'одна первообразная функции', id:2},
          {text: 'совокупность всех производных функции', id:3},
          {text: 'промежуток, на котором необходимо проинтегрировать функцию', id:4}
        ]
      },
      {
        questionNumber:3,
        question:'Чему равен неопределенный интеграл от 1?',
        rightAnswerId:1,
        answers: [
          {text: 'x+C', id:1},
          {text: '0', id:2},
          {text: '1+С', id:3},
          {text: 'С', id:4}
        ]
      }
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
  render() {
    return ( 
      <div>
        <h1>Тест</h1>
        <div className={'Quiz'}>
          
          <div className={'QuizWrapper'}>


            <CurrentQuestion 
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              quizLenght = {this.state.quiz.length}
              answerNumber = {this.state.activeQuestion+1 }
              onAnswerClick={this.onAnswerClickHandler}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default Quiz