import { combineReducers } from "redux";

import actions from "../actions";
import generateStructure from "./generateStructure";
import toggleBlackBox from "./toggleBlackBox";
import fillCrossword from "./fillCrossword";

const initialState = {
    crossword: {
        grid: [[null]], // 1 x 1 grid
        horizontalWords: [],
        verticalWords: [],
    },
    isRequesting: false,
    errorMessage: "",
};

const crossword = (state = initialState.crossword, action) => {
    //console.log('cw', state, action);
    switch (action.type) {
        case actions.GENERATE_STRUCTURE:
            return generateStructure(state, action);
        case actions.TOGGLE_BLACK_BOX:
            return toggleBlackBox(state, action);
        case actions.RECEIVE_CROSSWORD:
            return fillCrossword(state, action);
        default:
            return state;
    }
};

const isRequesting = (state = initialState.isRequesting, action) => {
    //console.log('isRequesting', state, action);
    switch (action.type) {
        case actions.REQUEST_CROSSWORD:
            return true;
        /*
        case actions.RECEIVE_CROSSWORD:
            return false;
        default:
            return state;
        */
        default:
            return false;
    }
};

// Updates error message to notify about the failed fetches.
const errorMessage = (state = initialState.errorMessage, action) => {
    switch (action.type) {
        case actions.RESET_ERROR_MESSAGE:
            return "";
        case actions.ERROR_HANDLING:
            return action.errorMessage;
        default:
            return state;
    }
};

export default combineReducers({
    crossword,
    isRequesting,
    errorMessage,
});
