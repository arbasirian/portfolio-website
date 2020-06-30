import ArticleActionTypes from './article.types';


export const selectArticle = item => ({
    type: ArticleActionTypes.SET_CURRENT_ARTICLE,
    payload: item
});

export const setArticleSlide = item => ({
    type: ArticleActionTypes.SET_CURRENT_ARTICLE_SLIDE,
    payload: item
});

export const setArticles = item => ({
    type: ArticleActionTypes.SET_ARTICLES,
    payload: item
});

