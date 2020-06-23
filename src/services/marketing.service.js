import axios from "axios";
import {authHeader, getError} from "../utils";
import {endpoints} from "./endpoints";

/**
 * Functions used to issue AJAX requests and manage responses.
 * All of the included methods use the Axios library for Promise-based requests.
 */
export const heroService = {
    getHero
};

function getHero(id) {
    return axios
        .get(endpoints.BASEURL + endpoints.HERO, {headers: authHeader()})
        .then(function (response) {
            return response.data.hero;
        })
        .catch(function (error) {
            return Promise.reject(getError(error));
        });
}