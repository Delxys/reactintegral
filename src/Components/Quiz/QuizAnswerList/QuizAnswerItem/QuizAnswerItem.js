import classes from './QuizAnswerItem.css'
const QuizAnswerItem = props => {
  return (
    <li
      className='QuizAnswerItem'
      onClick={()=>props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
}

export default QuizAnswerItem