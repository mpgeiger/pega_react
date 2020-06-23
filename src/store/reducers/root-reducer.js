import {combineReducers} from "redux";
import {oauth} from "./oauth.reducer";
import {accounts} from "./account.reducer";
import {alert} from "./alert.reducer";
import {billPay} from "./bill_pay.reducer";
import {cases} from "./case.reducer";
import {customerInfo} from "./customer_info.reducer";
import {hero} from "./hero.reducer";
import {assignments} from "./assignment.reducer";
import {workqueue} from "./workqueue.reducer";
import {error} from "./error.reducer";
import {actionTypes} from "../actions";

const rootReducer = (state, action) => {
    if (action.type === actionTypes.LOGOUT) {
        state = undefined;
    }

    return appReducer(state, action);
};

const appReducer = combineReducers({
    oauth,
    accounts,
    alert,
    billPay,
    customerInfo,
    hero,
    cases,
    assignments,
    workqueue,
    error
});

export default rootReducer;

