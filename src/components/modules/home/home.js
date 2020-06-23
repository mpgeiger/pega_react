import React, {Component} from "react";
import {connect} from "react-redux";
import {Dropdown, Menu, Segment} from "semantic-ui-react";
import {WorkArea} from "../../workarea/workarea";
import {assignmentActions, caseActions, oauthActions} from "../../../store/actions";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            recentsLoading: false
        };
    }

    componentDidMount() {
        if (this.props.oauth.loggedIn && this.props.caseTypes.length === 0) {
            this.props.dispatch(caseActions.getCaseTypes());
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!this.props.oauth.loggedIn && nextProps.oauth.loggedIn) {
            this.props.dispatch(caseActions.getCaseTypes());
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if (nextState.visible) {
            this.setState({recentsLoading: true});
            this.props
                .dispatch(oauthActions.getRecents())
                .then(() => this.setState({recentsLoading: false}));
        }
    }

    getMenuItemsForCases() {
        let validCases = [];
        if (this.props.caseTypes?.length > 0) {
            this.props.caseTypes.forEach(caseType => {
                if (caseType.CanCreate === "true") {
                    validCases.push(
                        <Dropdown.Item
                            key={caseType.name}
                            name={caseType.name}
                            content={caseType.name}
                            onClick={e =>
                                this.createCase(caseType.ID, caseType.startingProcesses[0])
                            }
                        />
                    );
                }
            });
        }

        return validCases;

    }

    getMenuItemsForRecents() {
        if (this.state.recentsLoading) {
            return <Menu.Item name="loading" content="Loading..."/>;
        }

        const recents = this.props.oauth.recents;
        if (recents) {
            return recents.map(data => (
                <Dropdown.Item
                    key={data.caseID}
                    name={data.caseId}
                    content={data.label + " | " + data.id}
                    onClick={() => this.openRecent(data.caseID)}
                />
            ));
        } else {

        }
    }

    openRecent(caseID) {
        this.props.dispatch(assignmentActions.addOpenAssignment(caseID));

        this.props.dispatch(caseActions.getCase(caseID)).then(data => {
            if (
                data.aCase &&
                data.aCase.assignments &&
                data.aCase.assignments.length > 0
            ) {
                this.props.dispatch(
                    assignmentActions.getAssignment(data.aCase.assignments[0].ID)
                );
            } else {
                this.props.dispatch(caseActions.getView(caseID, "pyCaseDetails"));
                this.props.dispatch(caseActions.getPage(caseID, "Review"));
                this.props.dispatch(assignmentActions.assignmentReviewMode(caseID));
            }
        });
        this.setState({visible: false});
    }

    createCase(id, startingProcess) {
        console.log(id);
        console.log(JSON.stringify(startingProcess));
        if (startingProcess.requiresFieldsToCreate === "true") {
            this.props.dispatch(caseActions.getCaseCreationPage(id));
        } else {
            this.props.dispatch(caseActions.createCase(id));
        }

        this.setState({visible: false});
    }

    render() {
        return (
            <div>
                <Menu secondary>
                    <Dropdown item text='Create&nbsp;&nbsp;' icon="plus">
                        <Dropdown.Menu>
                            {this.getMenuItemsForCases()}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='Recents&nbsp;&nbsp;' icon="history">
                        <Dropdown.Menu>
                            {this.getMenuItemsForRecents()}
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
                <Segment>
                    <WorkArea/>
                </Segment>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {alert, cases, oauth} = state;
    return {
        alert,
        caseTypes: cases.caseTypes,
        oauth: oauth
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export {connectedHome as Home};