import {actionTypes} from "./actionTypes";
import {heroService} from "../../services";
import {alertActions} from "./alert.actions";

export const heroActions = {
    getHero,
    setHero
};

function getHero(id) {
    function getFromPega() {
        return dispatch => {
            dispatch(request(id));

            return heroService.getHero(id).then(
                hero => {
                    return dispatch(success(hero));
                },
                error => {
                    dispatch(alertActions.error(error));
                    return dispatch(failure(error));
                }
            )
        }
    }

    return request(id);

    function request(id) {
        return {type: actionTypes.HERO_REQUEST, id};
    }

    function success(hero) {
        return {type: actionTypes.HERO_SUCCESS, hero};
    }

    function failure(error) {
        return {type: actionTypes.HERO_REQUEST_FAILURE, error};
    }
}

function setHero(heroUrl) {
    return {
        type: actionTypes.SET_HERO,
        heroUrl
    }
}