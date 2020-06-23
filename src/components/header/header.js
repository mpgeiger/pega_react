import React, {Component} from "react";
import {connect} from "react-redux";
import {Icon, Image, Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom';


class SiteHeader extends Component {

    constructor(props, context) {
        super(props, context);
        this.content = '';
    }

    render() {
        if (this.props.loggedIn) {
            return (
                <Menu inverted color="red" stackable={false} fixed="top" className="header">
                    <Menu.Item className="no_padding" name="app" as={Link} to="/">
                        <Image src={process.env.PUBLIC_URL + '/img/logo.png'} style={{width: 35}}/>
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/marketing">
                        <Icon name="envelope open" size="small"/>
                        Marketing
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/treasury">
                        <Icon name="chart line" size="small"/>
                        Treasury
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/lending">
                        <Icon name="file alternate outline" size="small"/>
                        Lending
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/fx_services">
                        <Icon name="euro sign" size="small"/>
                        F/X Services
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/investments">
                        <Icon name="sitemap" size="small"/>
                        Investments
                    </Menu.Item>
                    <Menu.Item name="app" as={Link} to="/recent_activity">
                        <Icon name="clock" size="small"/>
                        Recent Activity
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item name="Logout" as={Link} to="/login">
                            Logout {this.props.name}
                        </Menu.Item>>
                    </Menu.Menu>
                </Menu>
            );
        } else {
            return '';
        }
    }
}

function mapStateToProps(state) {
    //console.log(JSON.stringify(state.oauth.userData));
    return {
        loggedIn: state.oauth.loggedIn,
        name: state.oauth.userData.name
    };
}

const connectedHeader = connect(mapStateToProps)(SiteHeader);
export {connectedHeader as SiteHeader};