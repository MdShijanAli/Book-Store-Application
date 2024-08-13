import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import setEditMode from "../redux/books/thunk/setEditMode";
import updateBook from "../redux/books/thunk/updateBook";

function BookingForm() {
  const books = useSelector((state)=> state.books.books)
  const editMode = useSelector((state)=> state.books.edit)
  const dispatch = useDispatch()
  console.log('editMode', editMode);

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [featured, setFeatured] = useState(false)

  const handleChangeName = (e)=>{
    setName(e.target.value)
  }
  const handleChangeAuthor = (e)=>{
    setAuthor(e.target.value)
  }
  const handleChangeThumbnail = (e)=>{
    setThumbnail(e.target.value)
  }
  const handleChangePrice = (e)=>{
    setPrice(e.target.value)
  }
  const handleChangeRating = (e)=>{
    setRating(e.target.value)
  }
  const handleChangeFeatured = (e)=>{
    setFeatured(e.target.checked)
  }
  

  const handleSubmit = (e) => {
     e.preventDefault()

     const bookData = {
       name,
       author,
       thumbnail,
       price,
       rating,
       featured
     }

     if(editMode.editMode){
      dispatch(updateBook(editMode.id, bookData))
      dispatch(setEditMode(false))
      setName('')
      setAuthor('')
      setThumbnail('')
      setPrice('')
      setRating('')
      setFeatured(false)
     }
     else{
      dispatch(addBook(bookData))
     
      setName('')
      setAuthor('')
      setThumbnail('')
      setPrice('')
      setRating('')
      setFeatured(false)
     }

  }

  useEffect(()=>{
     if(editMode.editMode){{
      console.log('Edit Mode Enable');
      const book = books.find((book)=> book.id === editMode.id)
      console.log('Book', book);
      

     setName(book.name)
     setAuthor(book.author)
     setThumbnail(book.thumbnail)
     setPrice(book.price)
     setRating(book.rating)
     setFeatured(book.featured)

      
     }}
  },[editMode])

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input value={name} onChange={handleChangeName} required className="text-input" type="text" id="input-Bookname" name="name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input value={author} onChange={handleChangeAuthor} required className="text-input" type="text" id="input-Bookauthor" name="author" />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input value={thumbnail} onChange={handleChangeThumbnail} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input value={price} onChange={handleChangePrice} required className="text-input" type="number" id="input-Bookprice" name="price" />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input value={rating} onChange={handleChangeRating} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
            </div>
          </div>

          <div className="flex items-center">
            <input checked={featured} onChange={handleChangeFeatured} id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
            <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
          </div>

          <button type="submit" className="submit" id="submit">{editMode.editMode ? 'Update': 'Add Book'}</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;