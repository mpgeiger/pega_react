import axios from "axios";
import {endpoints} from "./endpoints";
import {authHeader, getError} from "../utils";

/**
 * Functions used to issue AJAX requests and manage responses.
 * All of the included methods use the Axios library for Promise-based requests.
 */
export const userService = {
    operator
};

function operator() {
    return axios
        .get(endpoints.BASEURL + endpoints.DATA + "/D_OperatorID", {
            headers: authHeader
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}
