import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Dropdown, Grid, Menu, Segment} from "semantic-ui-react";
import {Hero} from "../../hero";
import {heroActions} from '../../../store/actions';
import {WorkList} from "../../worklist/worklist";
import {ModalWorkObject} from "../../workObject";

class Lending extends Component {
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
                                <Dropdown item text='Lending&nbsp;&nbsp;' icon="file alternate outline">
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
                                        Interest Rates
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
        setHeroUrl: () => dispatch(heroActions.setHero('/img/lending.png'))
    }
};

const connectedLending = connect(mapStateToProps, mapDispatchToProps)(Lending);
export {connectedLending as Lending};