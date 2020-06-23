import {actionTypes} from "../actions";

/**
 * Redux reducers.
 * Used to update state in the store after actions are issued.
 */
const heroDefaultState = {
    loadingHero: false,
    heroUrl: '/img/hero.jpeg'
};

export function hero(state = heroDefaultState, action) {
    switch (action.type) {
        case actionTypes.HERO_REQUEST:
            return state;
        /*return {
            ...state,
            loadingHero: true
        };*/
        case actionTypes.HERO_SUCCESS:
            return state;
        /*return {
            ...state,
            loadingHero: false,
            hero: {
                ...state.hero
            }
        };*/
        case actionTypes.HERO_REQUEST_FAILURE:
            return {
                ...state,
                loadingHero: false
            };
        case actionTypes.SET_HERO:
            // console.log(action.heroUrl);
            return {
                loadingHero: false,
                heroUrl: action.heroUrl
            };
        default:
            return state;
    }
}