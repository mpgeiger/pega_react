import {actionTypes} from "../actions";

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
const customerInfoDefaultState = {
    loading: false,
    customer: {}
};

export function customerInfo(state = customerInfoDefaultState, action) {
    switch (action.type) {
        case actionTypes.CUSTOMER_INFO_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CUSTOMER_INFO_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                customer: action.customerInfo
            };
        case actionTypes.CUSTOMER_INFO_DATA_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
