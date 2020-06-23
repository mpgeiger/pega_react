import React, {Component} from "react";
import {connect} from "react-redux";
import {Dropdown, Grid, Menu, Segment} from "semantic-ui-react";
import {Hero} from "../../hero";
import {WorkList} from "../../worklist/worklist";
import {heroActions} from "../../../store/actions";
import {KeyRates} from './key_rates';
import {ModalWorkObject} from "../../workObject";


class FXServices extends Component {
    constructor(props, context, work) {
        super(props, context);
        this.work = {
            instances: [
                {
                    id: 'Bank-Servicing-Work-AddressChange',
                    title: 'Address change request',
                    url: process.env.PUBLIC_URL + '/img/address_change.jpg'
                },
                {
                    id: 'Bank-Servicing-Work-FrequentlyAskedQuestions',
                    title: 'Frequently asked questions',
                    url: process.env.PUBLIC_URL + '/img/FAQ.jpg'
                },
            ]
        };
    }

    componentDidMount() {
        this.props.setHeroUrl();
    }

    loadOverview() {
    }

    orderDeposit() {
    }

    wireTransfer() {
    }

    faqs() {
    }

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10} floated='left' verticalAlign='top'>
                            <Menu secondary>
                                <Dropdown item text='F/X Services&nbsp;&nbsp;' icon="euro sign">
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            key="overview"
                                            name="Overview"
                                            content="Overview"
                                            onClick={e =>
                                                this.loadOverview()
                                            }
                                        />
                                        <Dropdown.Item
                                            key="order_deposit"
                                            name="Order & Deposit Currency"
                                            content="Order & Deposit Currency"
                                            onClick={e =>
                                                this.orderDeposit()
                                            }
                                        />
                                        <Dropdown.Item
                                            key="wire_transfer"
                                            name="International Wire Transfer"
                                            content="International Wire Transfer"
                                            onClick={e =>
                                                this.wireTransfer()
                                            }
                                        />
                                        <Dropdown.Item
                                            key="faqs"
                                            name="Answer Center (FAQs)"
                                            content="Answer Center (FAQs)"
                                            onClick={e =>
                                                this.faqs()
                                            }
                                        />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Hero/>
                        </Grid.Column>
                        <Grid.Column width={10} floated='left' verticalAlign='top'>
                            <KeyRates/>
                        </Grid.Column>
                        <Grid.Column width={3} verticalAlign='top'>
                            <ModalWorkObject work={this.work}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <WorkList/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        setHeroUrl: () => dispatch(heroActions.setHero('/img/fx_services.jpg'))
    }
};

const connectedFXServices = connect(mapStateToProps, mapDispatchToProps)(FXServices);
export {connectedFXServices as FXServices};

