import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Grid, Image, Modal, Tab} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {WorkObject} from "./workObject";
import {assignmentActions, caseActions} from "../../store/actions";

class ModalWorkObject extends Component {

    constructor(props) {
        super(props);

        this.state = {
            caseId: '',
            open: false,
            summary: '',
            visible: false,
            imageUrl: process.env.PUBLIC_URL + '/img/address_change.jpg'
        };

        this.links = this.props.work.instances.map((workInfo) =>
            <li key={workInfo.key}>
                <Link onClick={this.showCreateWork(true, workInfo)} to="#">
                    {workInfo.title}
                </Link>
            </li>
        );
    }

    showCreateWork = (dimmer, workInfo) => () => {
        this.createCase(workInfo.id);
        this.setState({
            dimmer,
            open: true,
            summary: workInfo.title,
            visible: false,
            imageUrl: workInfo.url
        });
    };

    close = () => {
        this.setState({open: false});
        assignmentActions.closeAssignment(this.props.openAssignments[this.props.openAssignments.length - 1]);
    };

    render() {
        const {open, dimmer} = this.state;

        return (
            <div>
                <Container text>
                    <header>
                        <h3>
                            Quick Links
                        </h3>
                    </header>
                    <ul>
                        {this.links}
                    </ul>
                </Container>
                {this.getModal(dimmer, open)}
            </div>
        )
    }

    createCase(id) {
        console.log(id);
        this.props.dispatch(caseActions.createCaseV2(id));
    }

    getModal(dimmer, open) {
        console.log(JSON.stringify(this.props.activeAlerts));
        if (this.props.currentClosed === false) {
            return (
                <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
                    <Modal.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <h2>{this.state.summary}</h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Image src={this.state.imageUrl}/>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Modal.Description>
                                        <div className="dashboard-container">
                                            <Container fluid>
                                                {this.getWork()}
                                            </Container>
                                        </div>
                                    </Modal.Description>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            );
        } else if (this.props.activeAlerts) {
            return (
                <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
                    <Modal.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <h2>{this.state.summary}</h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Image src={this.state.imageUrl}/>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Modal.Description>
                                        <div className="dashboard-container">
                                            <Container fluid>
                                                {this.props.activeAlerts[this.props.activeAlerts.length - 1].message}
                                            </Container>
                                        </div>
                                    </Modal.Description>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            );
        } else {
            return '';
        }
    }

    getWork() {
        if (
            (this.props.assignmentDetails[this.props.openAssignments[this.props.openAssignments.length - 1]] &&
                this.props.caseDetails[this.props.openAssignments[this.props.openAssignments.length - 1]]) ||
            this.props.pages[this.props.openAssignments[this.props.openAssignments.length - 1]]
        ) {
            return (
                <WorkObject
                    assignment={this.props.assignmentDetails[this.props.openAssignments[this.props.openAssignments.length - 1]]}
                    caseID={this.props.openAssignments[this.props.openAssignments.length - 1]}
                    case={this.props.caseDetails[this.props.openAssignments[this.props.openAssignments.length - 1]]}
                    page={this.props.pages[this.props.openAssignments[this.props.openAssignments.length - 1]]}
                />
            );
        } else {
            return <Tab.Pane key={this.props.openAssignments[this.props.openAssignments.length - 1]} loading/>;
        }
    }

}

function mapStateToProps(state) {
    const {
        openAssignments,
        assignmentDetails,
        activeIndex,
        worklistSettings,
        openCasesData,
        openAssignmentsTabIdx,
        currentClosed
    } = state.assignments;
    const {activeAlerts} = state.alert;
    const {caseDetails, pages} = state.cases;

    return {
        openAssignments: openAssignments,
        assignmentDetails: assignmentDetails,
        caseDetails: caseDetails,
        pages: pages,
        activeIndex: activeIndex,
        worklistSettings,
        openCasesData,
        openAssignmentsTabIdx,
        currentClosed,
        activeAlerts
    };
}

const connectedModalWorkObject = connect(mapStateToProps)(ModalWorkObject);
export {connectedModalWorkObject as ModalWorkObject};