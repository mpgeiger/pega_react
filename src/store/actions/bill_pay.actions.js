import {dataPageService} from "../../services";
import {alertActions} from "./alert.actions";
import {actionTypes} from "./actionTypes";

export const billPayActions = {
    getRegisteredBills
};

function getRegisteredBills() {
    // This function's code will look very similar to function cases() from case.action.js
    // Will use dataPageService.getDataPage(id) to make the AJAX request
    //return {type : actionTypes.ACCOUNT_DATA_SUCCESS};
    return dispatch => {
        dispatch(request());
        dataPageService.getDataPage("D_BillPayList", {'CustomerID': 'NBK010125'}).then(
            bills => {
                dispatch(success(bills.pxResults));
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request() {
        return {type: actionTypes.BILL_PAY_DATA_REQUEST};
    }

    function success(bills) {
        return {type: actionTypes.BILL_PAY_DATA_SUCCESS, bills};
    }

    function failure(error) {
        return {type: actionTypes.BILL_PAY_DATA_FAILURE, error};
    }
}