import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Grid, Image, Modal, Tab} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {WorkObject} from "./workObject";
import {caseActions} from "../../store/actions";

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

    close = () => this.setState({open: false});

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
                <Modal dimmer={dimmer} open={open} onClose={this.close} closeIcon>
                    <Modal.Content image>
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
            </div>
        )
    }

    createCase(id) {
        console.log(id);
        this.props.dispatch(caseActions.createCaseV2(id));
    }

    getWork() {
        if (
            (this.props.assignmentDetails[this.props.openAssignments[0]] &&
                this.props.caseDetails[this.props.openAssignments[0]]) ||
            this.props.pages[this.props.openAssignments[0]]
        ) {
            return (
                <WorkObject
                    assignment={this.props.assignmentDetails[this.props.openAssignments[0]]}
                    caseID={this.props.openAssignments[0]}
                    case={this.props.caseDetails[this.props.openAssignments[0]]}
                    page={this.props.pages[this.props.openAssignments[0]]}
                />
            );
        } else {
            return <Tab.Pane key={this.props.openAssignments[0]} loading/>;
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
        openAssignmentsTabIdx
    } = state.assignments;
    const {caseDetails, pages} = state.cases;

    return {
        openAssignments: openAssignments,
        assignmentDetails: assignmentDetails,
        caseDetails: caseDetails,
        pages: pages,
        activeIndex: activeIndex,
        worklistSettings,
        openCasesData,
        openAssignmentsTabIdx
    };
}

const connectedModalWorkObject = connect(mapStateToProps)(ModalWorkObject);
export {connectedModalWorkObject as ModalWorkObject};