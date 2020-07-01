import MobileActionTypes from "./mobile.types";

export const toggleSidebar = item => ({
    type: MobileActionTypes.TOGGLE_SIDE_NAVIGATION,
    payload: item
});
