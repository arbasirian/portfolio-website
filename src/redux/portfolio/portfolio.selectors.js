import { createSelector } from 'reselect';

const selectPortfolio = state => state.portfolio;

export const selectCurrentPortfolio = createSelector(
    [selectPortfolio],
    portfolio => portfolio.currentPortfolio
);
export const selectPortfolioSlide = createSelector(
    [selectPortfolio],
    portfolio => portfolio.portfolioSlideItem
);
export const selectPortfolioList = createSelector(
    [selectPortfolio],
    portfolio => portfolio.portfolioList
);