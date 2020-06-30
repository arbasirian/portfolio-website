import BookActionTypes from './book.types';


export const selectBook = item => ({
    type: BookActionTypes.SET_CURRENT_BOOK,
    payload: item
});

export const setBookList = item => ({
    type: BookActionTypes.SET_BOOKS_LIST,
    payload: item
});

