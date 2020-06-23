import {dataPageService} from "../../services";
import {alertActions} from "./alert.actions";
import {actionTypes} from "./actionTypes";

export const customerInfoActions = {
    getCustomerInfo
};

function getCustomerInfo() {
    return dispatch => {
        dispatch(request());
        dataPageService.getDataPage("D_Customer", {'pyGUID': 'NBK010125'}).then(
            customerInfo => {
                dispatch(success(customerInfo));
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request() {
        return {type: actionTypes.CUSTOMER_INFO_DATA_REQUEST};
    }

    function success(customerInfo) {
        return {type: actionTypes.CUSTOMER_INFO_DATA_SUCCESS, customerInfo};
    }

    function failure(error) {
        return {type: actionTypes.CUSTOMER_INFO_DATA_FAILURE, error};
    }
}