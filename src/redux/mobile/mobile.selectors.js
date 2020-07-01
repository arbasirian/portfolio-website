import { createSelector } from 'reselect';

const selectMobile = state => state.mobile;

export const sidebarStatus = createSelector(
    [selectMobile],
    mobile => mobile.visibleSidbar
);

export const checkActiveIndex = createSelector(
    [selectMobile],
    mobile => mobile.activeIndex
);
