import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";

const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden')
};

class SiteFooter extends Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <div className="footer">
                        <Button onClick={toggleModal} color="red">Chat</Button>
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.oauth.loggedIn
    };
}

const connectedFooter = connect(mapStateToProps)(SiteFooter);
export {connectedFooter as SiteFooter};


