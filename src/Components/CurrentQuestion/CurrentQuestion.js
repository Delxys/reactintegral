import React from 'react'
import classes from './CurrentQuestion.css'
import QuizAnswersList from '../Quiz/QuizAnswerList/QuizAnswersList'
 
const CurrentQuestion = (props) => (
  <div className='CurrentQuestion'>
    <p className='Question'>
      <span>
        <strong>{props.answerNumber}</strong>&nbsp;
        {props.questiontext}
      </span>

      <small>{props.answerNumber} из {props.quizLenght}</small>
    </p>

    <QuizAnswersList
    answers={props.answers}
    onAnswerClick={props.onAnswerClick}
    />
  </div>
)

export default CurrentQuestion 