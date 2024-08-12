import { ADD, DELETED, FETCHED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type){
    case FETCHED:
      return action.payload

     case ADD:
        return [
          ...state,
          action.payload
        ]

      case DELETED:
        return state.filter((book)=> book.id !== action.payload)

      default:
        return state
  }
}

export default reducer