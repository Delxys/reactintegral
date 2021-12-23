import classes from './QuizAnswerItem.css'
const QuizAnswerItem = props => {
  return (
    <li
      className='QuizAnswerItem'
      // onClick={()=>props.onAnswerClick(props.answer.id)}
      onClick={()=>props.onAnswerClick(props.answer)}
    >
      {/* { props.answer.text } */}
      { props.answer }
    </li>
  )
}

export default QuizAnswerItem