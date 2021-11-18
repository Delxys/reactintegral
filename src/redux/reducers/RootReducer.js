import { CALC,DELALL,DEL } from "../actions/actionTypes";

const initialState ={
  AnswerList:[],
}

export default function Calculator(state1=initialState, action){
  switch (action.type) {
    case CALC:
      return {
        ...state1,
        AnswerList: action.payload
      }
    case DELALL:
      const answerListNew=[];
      return {
        AnswerList:answerListNew
        
      }
    case DEL:
      let answerList = state1.AnswerList;
      answerList.splice(action.payload,1)
      return {
        AnswerList:answerList
      }
    default:
      return state1
  }   
}