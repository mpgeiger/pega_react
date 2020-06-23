import {dataPageService, oauthUserService} from "../../services";
import {alertActions} from "./alert.actions";
import {actionTypes} from "./actionTypes";

export const oauthActions = {
    login,
    logout,
    getUserData,
    getRecents
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        fetch(process.env.REACT_APP_OAUTH2_BASE_URL, oauthUserService.loginRequestOptions(username, password))
            .then(response => response.text())
            .then(result => {
                // console.log(result);
                dispatch(success(result));
            })
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            });
    };

    function request(oauth) {
        return {type: actionTypes.LOGIN_REQUEST, oauth};
    }

    function success(oauth) {
        let oauthObj = JSON.parse(oauth);
        if (!oauthObj.errors) {
            localStorage.setItem("access_token", oauthObj.access_token);
            return {type: actionTypes.LOGIN_SUCCESS, oauth};
        } else {
            return {
                type: actionTypes.LOGIN_FAILURE, error:
                    {
                        oauth: {
                            access_token: ""
                        },
                        errors: oauthObj.errors
                    }
            };
        }
    }

    function failure(error) {
        return {
            type: actionTypes.LOGIN_FAILURE, error:
                {
                    oauth: {
                        access_token: ""
                    }
                }
        };
    }
}

function logout() {
    oauthUserService.logout();
    return {type: actionTypes.LOGOUT};
}

function getUserData() {
    // TODO: Use an action creator to create AJAX request to get datapage for user
    // This function's code will look very similar to function cases() from case.action.js
    // Will use dataPageService.getDataPage(id) to make the AJAX request
    //return {type : actionTypes.USER_DATA_SUCCESS};
    return dispatch => {
        dispatch(request());

        dataPageService.getDataPage("D_OperatorID").then(
            operator => {
                dispatch(success(operator));
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request() {
        return {type: actionTypes.USER_DATA_REQUEST};
    }

    function success(operator) {
        return {type: actionTypes.USER_DATA_SUCCESS, operator};
    }

    function failure(error) {
        return {type: actionTypes.USER_DATA_FAILURE, error};
    }
}

function getRecents() {
    return dispatch => {
        dispatch(request());

        return dataPageService
            .getDataPage("Declare_pxRecents", {Work: true, Rule: false})
            .then(
                data => {
                    return dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() {
        return {type: actionTypes.RECENTS_REQUEST};
    }

    function success(data) {
        return {type: actionTypes.RECENTS_SUCCESS, data};
    }

    function failure(error) {
        return {type: actionTypes.RECENTS_FAILURE, error};
    }
}

