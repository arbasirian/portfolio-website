import {combineReducers} from 'redux';
import bookReducer from './book/book.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';
import articleReducer from './article/article.reducer';

const rootReducer = combineReducers({
    book: bookReducer,
    portfolio: portfolioReducer,
    article: articleReducer
});

export default rootReducer;