import { CALC,DELALL,DEL } from "../actions/actionTypes";

const initialState ={
  AnswerList:[],
}

export default function Calculator(state1=initialState, action){
  switch (action.type) {
    case CALC:
      return {
        state1,
        AnswerList: action.payload.slice()
      }
    case DELALL:
      const answerListNew=[];
      return {
        state1,
        AnswerList:answerListNew
        
      }
    case DEL:
      let answerList = state1.AnswerList;
      answerList.splice(action.payload,1)
      return {
        state1,
        AnswerList:answerList.slice()
      }
    default:
      return state1
  }   
}