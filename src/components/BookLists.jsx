import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectedBooks from "../redux/books/thunk/selectedBooks";
import fetchBooks from './../redux/books/thunk/fetchBooks';
import Book from "./Book";

function BookLists() {
  const dispatch = useDispatch()
  const books =  useSelector((state)=> state.books.books)
  const filter =  useSelector((state)=> state.books.filter)
  
  const handleChangeSelectedBook = (value) => {
    dispatch(selectedBooks(value))
  }

  useEffect(()=> {
    dispatch(fetchBooks)
}, [dispatch])

  const filterBooks = (book) =>{
    switch (filter){
      case 'All':
        return true;
      case 'Featured':
        return book.featured;
      default:
        return true
    }
  }

  return ( 
    <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button onClick={()=> handleChangeSelectedBook('All')} className={`filter-btn ${filter === 'All' ? 'active-filter' : ''}`} id="lws-filterAll">All</button>
            <button onClick={()=> handleChangeSelectedBook('Featured')} className={`filter-btn ${filter === 'Featured' ? 'active-filter' : ''}`} id="lws-filterFeatured">Featured</button>
          </div>
        </div>
        <div className="lws-bookContainer">
        {books?.filter(filterBooks).map((book) => (
          <Book book={book} key={book.id}/>
        ))}
        </div>
      </div>
   );
}

export default BookLists;