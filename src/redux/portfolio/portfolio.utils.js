export const selectCurrentItem = (portfolioList, portfolioId) => {
    return portfolioList.find((item) => item.id === portfolioId);
};

export const selectSlideItem = (portfolioList, portfolioId) => {
    return portfolioList.find((item) => item.id === portfolioId);
};