import PortfolioActionTypes from './portfolio.types';


export const selectPortfolio = item => ({
    type: PortfolioActionTypes.SET_CURRENT_PORTFOLIO,
    payload: item
});

export const selectSlide = item => ({
    type: PortfolioActionTypes.SET_CURRENT_PORTFOLIO_SLIDE,
    payload: item
});

export const setPortfolioList = item => ({
    type: PortfolioActionTypes.SET_PORTFOLIO_LIST,
    payload: item
});

