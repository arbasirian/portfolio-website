
import ArticleActionTypes from './article.types';
import { selectCurrentItem } from './article.utils';
import ARTICLE_DATA from './article.data';

const INITIAL_STATE = {
    currentArticle: {},
    articleSlideItem: 0,
    articles: ARTICLE_DATA,
}

const articleReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ArticleActionTypes.SET_CURRENT_ARTICLE:
            return {
                ...state,
                currentArticle: selectCurrentItem(state.articles, action.payload)
            };
        case ArticleActionTypes.SET_CURRENT_ARTICLE_SLIDE:
            return {
                ...state,
                articleSlideItem: action.payload
            };
        case ArticleActionTypes.SET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };
        default: 
            return state;
    }
}

export default articleReducer;