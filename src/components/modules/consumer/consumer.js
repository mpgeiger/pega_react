import React, {Component} from "react";
import {connect} from "react-redux";
import {Accordion, Dropdown, Grid, Icon, Menu, Segment} from "semantic-ui-react";
import {Hero} from "../../hero";
import {heroActions} from '../../../store/actions';
import {WorkList} from "../../worklist/worklist";
import {ModalWorkObject} from "../../workObject";
import {Accounts} from "./accounts";
import {CustomerInfo} from "./customer_info";

class Consumer extends Component {
    constructor(props, context) {
        super(props, context);
        this.work = {
            instances: [
                {
                    id: 'Bank-Servicing-Work-AddressChange',
                    key: 'consumer_address_change',
                    title: 'Address change request',
                    url: process.env.PUBLIC_URL + '/img/address_change.jpg'
                },
                {
                    id: 'Bank-Servicing-Work-FrequentlyAskedQuestions',
                    key: 'consumer_faq',
                    title: 'Frequently asked questions',
                    url: process.env.PUBLIC_URL + '/img/FAQ.jpg'
                },
                {
                    id: 'Bank-Servicing-Work-RequestLimitIncrease',
                    key: 'consumer_limit_increase',
                    title: 'Request credit limit increase',
                    url: process.env.PUBLIC_URL + '/img/limit_increase.jpg'
                },
                {
                    id: 'Bank-Servicing-AddBillPayAccount',
                    key: 'consumer_add_bill_pay',
                    title: 'Add bill pay account',
                    url: process.env.PUBLIC_URL + '/img/bill_pay.png'
                }
            ]
        };

        this.state = {
            activeIndex: 0,
        }
    }

    componentDidMount() {
        this.props.setHeroUrl();
    }

    loadRecentTransactions() {

    }

    loadRecentExpenses() {

    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex});
    };

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <CustomerInfo/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Hero/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={10} floated='left' verticalAlign='top'>
                            <Accordion className="workspace">
                                <Accordion.Title
                                    active={this.state.activeIndex === 0}
                                    index={0}
                                    onClick={this.handleClick}
                                >
                                    <h5><Icon name='dropdown'/> Accounts</h5>
                                </Accordion.Title>
                                <Accordion.Content active={this.state.activeIndex === 0}>
                                    <Accounts/>
                                </Accordion.Content>

                                <Accordion.Title
                                    active={this.state.activeIndex === 1}
                                    index={1}
                                    onClick={this.handleClick}
                                >

                                    <h5><Icon name='dropdown'/> Bill Pay - Registered Accounts</h5>
                                </Accordion.Title>
                                <Accordion.Content active={this.state.activeIndex === 1}>
                                    {/*<BillPay />*/}
                                </Accordion.Content>
                            </Accordion>
                        </Grid.Column>
                        <Grid.Column width={3} verticalAlign='top'>
                            <ModalWorkObject work={this.work}/>
                            <Grid.Row>
                                <Grid.Column width={10} floated='right' verticalAlign='top'>
                                    <Menu secondary>
                                        <Dropdown item text='Online Banking&nbsp;&nbsp;' icon="file alternate outline">
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    key="transaction_history"
                                                    name="Recent Transactions"
                                                    content="Recent Transactions"
                                                    onClick={e =>
                                                        this.loadRecentTransactions()
                                                    }
                                                />
                                                <Dropdown.Item
                                                    key="expense_history"
                                                    name="Recent Expenses"
                                                    content="Recent Expenses"
                                                    onClick={e =>
                                                        this.loadRecentExpenses()
                                                    }
                                                />
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu>
                                </Grid.Column>
                            </Grid.Row>
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
        setHeroUrl: () => dispatch(heroActions.setHero('/img/consumer_offer.jpg'))
    }
};

const connectedConsumer = connect(mapStateToProps, mapDispatchToProps)(Consumer);
export {connectedConsumer as Consumer};