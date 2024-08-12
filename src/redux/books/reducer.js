import { ADD } from "./actionTypes";
import initialState from "./initialState";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book)=> Math.max(book.id, maxId), 0);
  return maxId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type){
     case ADD:
      const {name, author, image, price, rating, isFeature} = action.payload
        return [
          ...state,
          {
            id: nextBookId(state),
            name,
            author,
            image,
            price,
            rating,
            isFeature
          }
        ]
  }
}

export default reducer