import BookActionTypes from './book.types';
import { selectBookUtils } from './book.utils';
import BOOK_LIST from './book-list.data';

const INITIAL_STATE = {
    currentBook: {},
    booksList: BOOK_LIST,
}

const bookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case BookActionTypes.SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: selectBookUtils(state.booksList, action.payload)
            };
        case BookActionTypes.SET_BOOKS_LIST:
            return {
                ...state,
                booksList: action.payload
            };
        default: 
            return state;
    }
}

export default bookReducer;