import {combineReducers} from 'redux';
import bookReducer from './book/book.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';
import { reducer as responsiveReducer } from 'react-responsive-redux'
import mobileReducer from './mobile/mobile.reducer';
import articleReducer from './article/article.reducer';

const rootReducer = combineReducers({
    book: bookReducer,
    portfolio: portfolioReducer,
    article: articleReducer,
    mobile: mobileReducer,
    responsive: responsiveReducer

});

export default rootReducer;