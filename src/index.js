import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/root-reducer";
import 'semantic-ui-css/semantic.css';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    timestampsInSnapshots: true
};*/

const store = createStore(
    rootReducer,
    allStoreEnhancers
);

/*const rrfProps = {
    config: rrfConfig,
    dispatch: store.dispatch
};*/

ReactDOM.render(
    <Provider store={store}>
        <App aRandomProps="random prop"/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();