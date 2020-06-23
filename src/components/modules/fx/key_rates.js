import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Container} from "semantic-ui-react";

class KeyRates extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Container text>
                <header>
                    <h3>
                        Key Rates
                    </h3>
                </header>
                <p>
                    Find out how much foreign currency you need for your trip and look up cash exchange rates.
                    You can even print out an exchange rate wallet card for your trip.

                    Rates for ordering foreign currency for foreign currencies

                    Exchanging foreign currency for U.S. dollars
                </p>
                <p>

                </p>
                <table>
                    <thead>
                    <tr>
                        <td colSpan={4}>
                            <h3>Choose the foreign currencies you need for your trip</h3>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            Use this currency converter calculator to find out how much foreign currency
                            you’ll need for your trip and check the exchange rates for purchasing various
                            currencies. Or see exchange rates for returning currency.
                            <br/>
                            Order by 2 p.m. (delivery address local time) and your currency will
                            ship the same business day.
                        </td>
                    </tr>
                    <tr>
                        <td width='25%'>

                        </td>
                        <td width='25%'>
                            Destination Foreign amount
                            <br/>
                            <small>
                                (rounded on purchaseInformation Panel layer)
                            </small>
                        </td>
                        <td width='25%'>
                            Today's exchange rate to order currency
                        </td>
                        <td width='25%'>
                            U.S. dollar amount
                        </td>
                    </tr>
                    <tr>
                        <td>Canada</td>
                        <td><input type="number"/><br/><small>Canadian Dollar (CAD)</small></td>
                        <td>x 0.7516</td>
                        <td>= $</td>
                    </tr>
                    </tbody>
                </table>
                <Button color="red">Add a currency</Button>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        // setHeroUrl: () => dispatch(heroActions.setHero('/img/fx_services.jpg'))
    }
};

const connectedKeyRates = connect(mapStateToProps, mapDispatchToProps)(KeyRates);
export {connectedKeyRates as KeyRates};

