import {dataPageService} from "../../services";
import {alertActions} from "./alert.actions";
import {actionTypes} from "./actionTypes";

export const accountActions = {
    getAccounts
};

function getAccounts() {
    return dispatch => {
        dispatch(request());
        dataPageService.getDataPage("D_AccountList", {'CustomerID': 'NBK010125'}).then(
            accounts => {
                dispatch(success(accounts.pxResults));
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request() {
        return {type: actionTypes.ACCOUNT_DATA_REQUEST};
    }

    function success(accounts) {
        return {type: actionTypes.ACCOUNT_DATA_SUCCESS, accounts};
    }

    function failure(error) {
        return {type: actionTypes.ACCOUNT_DATA_FAILURE, error};
    }
}