import axios from "axios";
import {authHeader, getError, ReferenceHelper} from "../utils";
import {endpoints} from "./endpoints";

/**
 * Functions used to issue AJAX requests and manage responses.
 * All of the included methods use the Axios library for Promise-based requests.
 */
export const assignmentService = {
    getAssignment,
    getFieldsForAssignment,
    performRefreshOnAssignment,
    performActionOnAssignment,
    assignments
};

function getAssignment(id) {
    return axios
        .get(encodeURI(endpoints.BASEURL + endpoints.ASSIGNMENTS + "/" + id), {
            headers: authHeader()
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}

function getFieldsForAssignment(assignment, actionId) {
    if (!actionId) {
        if (assignment.actions && assignment.actions.length > 0) {
            actionId = assignment.actions[0].ID;
        } else {
            return Promise.reject("No valid actions found.");
        }
    }

    return axios
        .get(
            encodeURI(
                endpoints.BASEURL +
                endpoints.ASSIGNMENTS +
                "/" +
                assignment.ID +
                endpoints.ACTIONS +
                "/" +
                actionId
            ),
            {
                headers: authHeader()
            }
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}

function performRefreshOnAssignment(assignmentID, actionID, body) {
    let refreshFor = "";
    if (body && body.refreshFor) {
        refreshFor = `?refreshFor=${body.refreshFor}`;
        delete body.refreshFor;
    }

    return axios
        .put(
            encodeURI(
                endpoints.BASEURL +
                endpoints.ASSIGNMENTS +
                "/" +
                assignmentID +
                endpoints.ACTIONS +
                "/" +
                actionID +
                endpoints.REFRESH +
                refreshFor
            ),
            {
                content: body
            },
            {
                headers: {
                    ...authHeader()
                }
            }
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}

function performActionOnAssignment(assignmentID, actionID, body) {
    return axios
        .post(
            encodeURI(endpoints.BASEURL + endpoints.ASSIGNMENTS + "/" + assignmentID),
            {
                content: ReferenceHelper.getPostContent(body)
            },
            {
                params: {
                    actionID: actionID
                },
                headers: authHeader()
            }
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
}

function assignments() {
    return axios
        .get(endpoints.BASEURL + endpoints.ASSIGNMENTS, {headers: authHeader()})
        .then(function (response) {
            return response.data.assignments;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}
