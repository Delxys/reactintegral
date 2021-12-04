import QuizAnswerItem from './QuizAnswerItem/QuizAnswerItem'
import classes from './QuizAnswersList.css'


const QuizAnswersList = props => {
  //  console.log('props',props)
  return(
  <ul className='QuizAnswersList'>
    { props.answers.map((answer, index) => {
      return (
        <QuizAnswerItem
          key={index}
          answer={answer}
          onAnswerClick = {props.onAnswerClick}
        />
      )
    }) }
  </ul>
)
}

export default QuizAnswersList