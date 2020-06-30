
import PORTFOLIO_DATA from './portfolio.data';
import PortfolioActionTypes from './portfolio.types';
import { selectSlideItem, selectCurrentItem } from './portfolio.utils';

const INITIAL_STATE = {
    currentPortfolio: {},
    portfolioSlideItem: 0,
    portfolioList: PORTFOLIO_DATA,
}

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PortfolioActionTypes.SET_CURRENT_PORTFOLIO:
            return {
                ...state,
                currentPortfolio: selectCurrentItem(state.portfolioList, action.payload)
            };
        case PortfolioActionTypes.SET_CURRENT_PORTFOLIO_SLIDE:
            return {
                ...state,
                portfolioSlideItem: action.payload
            };
        case PortfolioActionTypes.SET_PORTFOLIO_LIST:
            return {
                ...state,
                portfolioList: action.payload
            };
        default: 
            return state;
    }
}

export default portfolioReducer;