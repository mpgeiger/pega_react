import {actionTypes} from "../actions";

let initialState = {
    loadingBillPay: false,
    bills: []
};

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
export function billPay(state = initialState, action) {
    switch (action.type) {
        case actionTypes.BILL_PAY_DATA_REQUEST:
            // TODO: Handle account state after request is made, but no response received
            return {
                ...state,
                loadingBillPay: true
            };
        case actionTypes.BILL_PAY_DATA_SUCCESS:
            // TODO: Handle user state after successful call to account data page
            // Can store some data into state.userData
            return {
                ...state,
                loadingBillPay: false,
                bills: action.bills
            };

        case actionTypes.BILL_PAY_DATA_FAILURE:
            // TODO: Handle user state after failed call to account data page
            return state;
        default:
            return state;
    }
}
