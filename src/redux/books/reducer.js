import { ADD, DELETED, EDIT, FETCHED, SWITCHED, UPDATE } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        books: action.payload
      }

    case ADD:
      return [
        ...state,
        action.payload
      ]

    case DELETED:
      return state.books.filter((book) => book.id !== action.payload)

    case SWITCHED:
      return {
        ...state,
        filter: action.payload
      }

    case EDIT:
      const {bookId, value} =  action.payload
      return {
        ...state,
        edit: {
          id: bookId,
          editMode: value
        }
      }

    case UPDATE:
      const { bookId: updateBookId, book } = action.payload;
      const index = state.books.findIndex((book)=> book.id === updateBookId)
      if (index !== -1) {
        state.books[index] = book;
        return state
      }

    default:
      return state
  }
}

export default reducer