import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER, SET_INPUT_TEXT, SET_USER_STATE, SET_HIGHLIGHTED  } from "../../constants/constants";

const chipComponentAction = (dispatch) => ({
    addActiveUser: (user) => {
        dispatch({type: SET_ACTIVE_USER, data: user});
    },
    removeActiveUser: (user) => {
        dispatch({type: REMOVE_ACTIVE_USER, data: user});
    },
    setUserState: (user) => {
        dispatch({type: SET_USER_STATE, data: user});
    },
    setInputText: (data) => {
        dispatch({type: SET_INPUT_TEXT, data: data});
    },
    setHighlighted: (data) => {
        dispatch({type: SET_HIGHLIGHTED, data: data});
    },
});

export default chipComponentAction;