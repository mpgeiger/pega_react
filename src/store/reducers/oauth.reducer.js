import {actionTypes} from "../actions";

let initialState = {
    loggedIn: false,
    oauth: {
        access_token: "",
        refresh_token: "",
        token_type: "",
        expires_in: 0
    },
    userData: {},
    recents: [],
    errors: []
};

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
export function oauth(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loggedIn: false,
                oauth: {}
            };
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                oauth: action.oauth
            };
        }
        case actionTypes.LOGIN_FAILURE: {
            return {
                loggedIn: false,
                oauth: action.error.oauth,
                errors: action.error.errors
            };
        }
        case actionTypes.LOGOUT:
            return {
                loggedIn: false,
                oauth: null,
                userData: {},
                recents: [],
                errors: []
            };
        case actionTypes.USER_DATA_REQUEST:
            // TODO: Handle user state after request is made, but no response received
            return state;
        case actionTypes.USER_DATA_SUCCESS: {
            // TODO: Handle user state after successful call to user data page
            // Can store some data into state.userData
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.operator.pyUserName,
                    label: action.operator.pyLabel,
                    id: action.operator.pyUserIdentifier,
                    accessGroup: action.operator.pyAccessGroup,
                    email: action.operator.pyAddresses.Email.pyEmailAddress,
                    workbaskets: action.operator.pyWorkbasket
                }
            };

        }
        case actionTypes.USER_DATA_FAILURE:
            // TODO: Handle user state after failed call to user data page
            return state;
        case actionTypes.RECENTS_SUCCESS: {
            return {
                ...state,
                recents: action.data.pxResults.map(result => {
                    return {
                        label: result.pyLabel,
                        id: result.pyRecordID,
                        caseID: result.pyRecordKey
                    };
                })
            };
        }
        default:
            return state;
    }
}
