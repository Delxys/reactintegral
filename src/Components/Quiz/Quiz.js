import {Component} from 'react'
import axios from 'axios';
import classes from './Quiz.css'
import CurrentQuestion from '../CurrentQuestion/CurrentQuestion'
class Quiz extends Component {
  state = {
    activeQuestion: 0,
    rightAnswersCount: 0,
        quiz:[{
              answers: [
              ],
              correctanswer:0
            }],
  }

  onAnswerClickHandler=(answertext)=>{
  console.log(answertext)
  let cur = this.state.quiz[this.state.activeQuestion]
  let ra = cur.answers[Number(cur.correctanswer)-1]
  if(answertext===ra){
    const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()){
            this.setState({
                rightAnswersCount:  this.state.rightAnswersCount + 1
            });
            alert('Првильных ответов: ' + String(this.state.rightAnswersCount)+' из '+String(this.state.quiz.length));
            this.cleanState()
            this.componentDidMount()
        }else{
            this.setState({
                rightAnswersCount: this.state.rightAnswersCount + 1
            });
            this.setState({
                activeQuestion: this.state.activeQuestion+1
            })
        }
        window.clearTimeout(timeout);
    }, 200)
  }else{
          if(this.isQuizFinished()){
              alert('Првильных ответов: ' + String(this.state.rightAnswersCount)+' из '+String(this.state.quiz.length));   
              this.cleanState()
              this.componentDidMount()
          }else{
              this.setState({
                  activeQuestion: this.state.activeQuestion+1
              })
          }
    }
  }
  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
}
cleanState(){
  this.setState({
    activeQuestion: 0,
    rightAnswersCount: 0,
        quiz:[{
              answers: [
              ],
              correctanswer:0
            }]
  })
}
  componentDidMount=()=>{
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
    return ( 
      <div>
        <h1>Тест</h1>
        <div className={'Quiz'}>
          <div className={'QuizWrapper'}>
          <CurrentQuestion 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            questiontext={this.state.quiz[this.state.activeQuestion].questiontext}
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