import MobileActionTypes from "./mobile.types";

const INITIAL_STATE = {
    visibleSidbar: false,
    activeIndex: null,
}

const mobileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MobileActionTypes.TOGGLE_SIDE_NAVIGATION:
            return {
                ...state,
                visibleSidbar: action.payload
            };
        case MobileActionTypes.ACTIVE_INDEX_MOBILE_MENU:
            return {
                ...state,
                activeIndex: action.payload
            };
        default: 
            return state;
    }
}

export default mobileReducer;