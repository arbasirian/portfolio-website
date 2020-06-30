export const selectBookUtils = (booksList, bookIdToAdd) => {
    return booksList.find((book) => book.id === bookIdToAdd);
};
