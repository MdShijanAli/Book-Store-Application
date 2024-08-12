import { ADD, DELETED, FETCHED, SWITCHED, UPDATE } from "./actionTypes"

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

export const update = (id, book) => {
  return {
    type: UPDATE,
    payload: {
      id,
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