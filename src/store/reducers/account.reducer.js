import {actionTypes} from "../actions";

let initialState = {
    loadingAccounts: false,
    accounts: []
};

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
export function accounts(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ACCOUNT_DATA_REQUEST:
            // TODO: Handle account state after request is made, but no response received
            return {
                ...state,
                loadingAccounts: true
            };
        case actionTypes.ACCOUNT_DATA_SUCCESS:
            // TODO: Handle user state after successful call to account data page
            // Can store some data into state.userData
            return {
                ...state,
                loadingAccounts: false,
                accounts: action.accounts
            };

        case actionTypes.ACCOUNT_DATA_FAILURE:
            // TODO: Handle user state after failed call to account data page
            return state;
        default:
            return state;
    }
}
