import { createSelector } from 'reselect';

const selectArticle = state => state.article;

export const selectCurrentArticle = createSelector(
    [selectArticle],
    article => article.currentArticle
);
export const selectArticleSlide = createSelector(
    [selectArticle],
    article => article.articleSlideItem
);
export const selectArticles = createSelector(
    [selectArticle],
    article => article.articles
);