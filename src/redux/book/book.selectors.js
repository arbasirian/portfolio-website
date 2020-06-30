import { createSelector } from 'reselect';

const selectBook = state => state.book;

export const selectCurrentBook = createSelector(
    [selectBook],
    book => book.currentBook
);
export const selectBookList = createSelector(
    [selectBook],
    book => book.booksList
);