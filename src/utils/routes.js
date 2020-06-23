import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {FXServices, Home, Investments, Lending, Marketing, Treasury} from "../components/modules";
import {Login} from "../components/auth";
import {connect} from "react-redux";
import {Consumer} from "../components/modules/consumer/consumer";

class Routes extends Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Switch>
                        <Route path="/" exact component={Consumer}/>
                        <Route path="/recent_activity" component={Home}/>
                        <Route path="/marketing" component={Marketing}/>
                        <Route path="/treasury" component={Treasury}/>
                        <Route path="/lending" component={Lending}/>
                        <Route path="/fx_services" component={FXServices}/>
                        <Route path="/investments" component={Investments}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() => <div>404</div>}/>
                    </Switch>
                </div>
            )
        } else {
            return (
                <div className="sans-serif">
                    <Login/>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.oauth.loggedIn
    };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export {connectedRoutes as Routes};