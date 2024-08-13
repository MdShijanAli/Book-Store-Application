import { edit } from "../action"

const setEditMode = (id, value)=>{
  return (dispatch)=> {
    dispatch(edit(id, value))
  }
}

export default setEditMode