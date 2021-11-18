import {CALC, DELALL,DEL} from './actionTypes'

export function Calculate(curList){
  return{
    type:CALC,
    payload:curList
}
}
export function DeleteAll(){
    return{
        type:DELALL
    }
}
export function Delete(index){
  return{
      type:DEL,
      payload:index
  }
}
