import React, {Component} from "react";
import {connect} from "react-redux";
import {oauthActions} from "../../store/actions";
import {Button, Container, Form, Segment} from "semantic-ui-react";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAuthenticate = this.handleAuthenticate.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAuthenticate(event) {
        event.preventDefault();
        const {dispatch} = this.props;
        dispatch(oauthActions.login(this.state.username, this.state.password));
        if (this.props.loggedIn) {
            this.props.history.push('/');
            dispatch(oauthActions.getUserData)
        }
    }

    render() {
        return (
            <Container fluid>

                <Segment placeholder>
                    <Form onSubmit={this.handleAuthenticate}>
                        <Form.Field>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Field>
                        <Button color="red" type="submit">Login</Button>
                    </Form>
                </Segment>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        loggedIn: state.oauth.loggedIn,
        oauth: state.oauth.oauth,
        errors: state.oauth.errors
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export {connectedLogin as Login};