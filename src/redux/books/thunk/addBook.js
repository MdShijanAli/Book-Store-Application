import { add } from "../action"

const addBook = (bookData) => {
  const {name, author, thumbnail, price, rating, featured} = bookData
  return  async (dispatch) => {
      const response = await fetch('http://localhost:9000/books', {
        method: 'POST',
        body: JSON.stringify({
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }),
        headers: {
          'Content-type': 'Application/json', 'charset': 'UTF-8'
        }
      })

      const book = await response.json()

      dispatch(add(book))

  }
}

export default addBook