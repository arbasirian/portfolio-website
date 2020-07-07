import ArticleActionTypes from './article.types';
import { Article } from '../../shared/schema/articles';

export const selectArticle = (item: Article) => ({
    type: ArticleActionTypes.SET_CURRENT_ARTICLE,
    payload: item
});

export const setArticleSlide = (item: number) => ({
    type: ArticleActionTypes.SET_CURRENT_ARTICLE_SLIDE,
    payload: item
});

export const setArticles = (item: Article[]) => ({
    type: ArticleActionTypes.SET_ARTICLES,
    payload: item
});

