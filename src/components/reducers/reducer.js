import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER, OVERALL_USER_LIST, SET_INPUT_TEXT, SET_USER_STATE, SET_HIGHLIGHTED} from "../../constants/constants";

export const initialState = {
    active: [],
    inactive: OVERALL_USER_LIST,
    input: '',
    highlighted: false,
};

export function reducer(state = initialState, action) {
    let activeUsers = state.active, inactiveUsers = state.inactive;
    switch (action.type) {
        case SET_ACTIVE_USER:
            activeUsers.push(action.data);
            inactiveUsers = inactiveUsers.filter((user)=>user!==action.data);
            return {
                ...state,
                active: activeUsers,
                inactive: inactiveUsers,
            };
        case REMOVE_ACTIVE_USER:
            inactiveUsers.push(action.data);
            activeUsers = activeUsers.filter((user)=>user!==action.data);
            return {
                ...state,
                active: activeUsers,
                inactive: inactiveUsers,
            };
        case SET_USER_STATE:
            return {
                ...state,
                active: action.data,
            }
        case SET_INPUT_TEXT:
            return {
                ...state,
                input: action.data === true ? '': action.data,
            }
        case SET_HIGHLIGHTED:
            return {
                ...state,
                highlighted: action.data,
            }
        default:
            return state;
    }
};