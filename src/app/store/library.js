import { createSlice } from "@reduxjs/toolkit";
import history from "../utils/history";


const initialState = {
  books: null,
};

const BookSlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    booksReceive: (state, action) => {
      state.books = action.payload;
    },
    bookAdd: (state, action) => {
      if (!Array.isArray(state.books)) {
        state.books = [];
      }
      console.log(state.books);
      state.books.push(action.payload);
      console.log(state.books);
    },
    bookUpdate: (state, action) => {
      state.books[
        state.books.findIndex((b) => b._id === action.payload._id)
      ] = action.payload;
    },
    bookDelete:(state,action)=>{
      state.books = state.books.filter((b)=>b._id !== action.payload)
    },
    bookSave: (state) => {
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

const { reducer: bookReducer, actions } = BookSlice;
const { booksReceive, bookAdd, bookSave, bookUpdate, bookDelete } = actions;

export const loadBooks = () => (dispatch) => {
  const books = localStorage.getItem("books");
  dispatch(booksReceive(JSON.parse(books)));
};

export const getBooks = () => (state) => state.library.books;

export const createBook = (payload) => (dispatch) => {
  dispatch(bookAdd(payload));
  dispatch(bookSave());
  history.push("/")
};

export const updateBook = (payload) => (dispatch) => {
  dispatch(bookUpdate(payload))
  dispatch(bookSave());
  history.push("/")
}

export const deleteBook = (payload) => (dispatch) => {
dispatch(bookDelete(payload))
dispatch(bookSave());
}

export const getBookById = (bookId) => (state) => {
  return state.library.books.find((b)=>b._id===bookId)
}

export default bookReducer;
