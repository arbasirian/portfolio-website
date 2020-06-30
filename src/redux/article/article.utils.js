export const selectCurrentItem = (articles, articlesId) => {
    return articles.find((item) => item.id === articlesId);
};