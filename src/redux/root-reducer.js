import {combineReducers} from 'redux';
import bookReducer from './book/book.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';

const rootReducer = combineReducers({
    book: bookReducer,
    portfolio: portfolioReducer
});

export default rootReducer;