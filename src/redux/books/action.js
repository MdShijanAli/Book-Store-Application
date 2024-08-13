import { ADD, DELETED, EDIT, FETCHED, SWITCHED, UPDATE } from "./actionTypes"

export const add = (bookData) => {
  return {
    type: ADD,
    payload: bookData
  }
}

export const fetched = (bookData) => {
  return {
    type: FETCHED,
    payload: bookData
  }
}

export const update = (bookId, book) => {
  return {
    type: UPDATE,
    payload: {
      bookId,
      book
    }
  }
}

export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id
  }
}

export const switched = (value) => {
  return {
    type: SWITCHED,
    payload: value
  }
}

export const edit = (bookId, value) => {
  return {
    type: EDIT,
    payload: {
      bookId, value
    }
  }
}