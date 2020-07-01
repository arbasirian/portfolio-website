import { createSelector } from 'reselect';

const selectMobile = state => state.mobile;

export const sidebarStatus = createSelector(
    [selectMobile],
    mobile => mobile.visibleSidbar
);
