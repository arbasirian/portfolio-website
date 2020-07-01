import MobileActionTypes from "./mobile.types";

export const toggleSidebar = item => ({
    type: MobileActionTypes.TOGGLE_SIDE_NAVIGATION,
    payload: item
});
export const toggleMobileMenuItem = item => ({
    type: MobileActionTypes.ACTIVE_INDEX_MOBILE_MENU,
    payload: item
});
