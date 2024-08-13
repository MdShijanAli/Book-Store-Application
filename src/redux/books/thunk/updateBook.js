import { update } from "../action"

const updateBook = (id, bookData) => {
  const {name, author, thumbnail, price, rating, featured} = bookData
  return  async (dispatch) => {
      const response = await fetch(`http://localhost:9000/books/${id}`, {
        method: 'PUT',
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

      dispatch(update(id, book))

  }
}

export default updateBook