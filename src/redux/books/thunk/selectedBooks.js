import { switched } from "../action"

const selectedBooks =  (value) => {
  return (dispatch)=> {
      dispatch(switched(value))
  }
}

export default selectedBooks