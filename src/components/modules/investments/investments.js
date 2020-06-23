import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Dropdown, Grid, Menu, Segment} from "semantic-ui-react";
import {Hero} from "../../hero";
import {WorkList} from "../../worklist/worklist";
import {heroActions} from "../../../store/actions";
import {ModalWorkObject} from "../../workObject";
import {Portfolio} from "./portfolio";

class Investments extends Component {

    constructor(props, context, work) {
        super(props, context);
        this.work = {
            instances: [
                {
                    id: 'UPlus-Investment-Work-RevolvingCreditDisbursement',
                    title: 'Funding request',
                    url: process.env.PUBLIC_URL + '/img/funding_request.png'
                },
                {
                    id: 'Bank-Servicing-Work-AddressChange',
                    title: 'Address change request',
                    url: process.env.PUBLIC_URL + '/img/address_change.jpg'
                },
                {
                    id: 'Bank-Servicing-Work-PortfolioSummary',
                    title: 'Portfolio summary',
                    url: process.env.PUBLIC_URL + '/img/portfolio.jpg'
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

    loadHistory() {

    }

    loadPortfolioSummary() {

    }

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10} floated='left' verticalAlign='top'>
                            <Menu secondary>
                                <Dropdown item text='Investments&nbsp;&nbsp;' icon="sitemap">
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            key="history"
                                            name="History"
                                            content="History"
                                            onClick={e =>
                                                this.loadHistory()
                                            }
                                        />
                                        <Dropdown.Item
                                            key="portfolio"
                                            name="Portfolio"
                                            content="Portfolio"
                                            onClick={e =>
                                                this.loadPortfolioSummary()
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
                            <Container text>
                                <header>
                                    <h3>
                                        <Portfolio/>
                                    </h3>
                                </header>
                            </Container>
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
        setHeroUrl: () => dispatch(heroActions.setHero('/img/investment_banking.jpg'))
    }
};

const connectedInvestments = connect(mapStateToProps, mapDispatchToProps)(Investments);
export {connectedInvestments as Investments};