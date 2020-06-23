import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, Image} from "semantic-ui-react";
import {billPayActions} from "../../../store/actions/bill_pay.actions";

class BillPay extends Component {

    constructor(props) {
        super(props);
        this.billsDisplay = <div>No bill pay accounts loaded</div>
    }

    componentDidMount() {
        this.refreshBillPayAccounts()
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps) {
            if (!nextProps.loading) {
                this.billsDisplay = nextProps.bills.map((billPay) =>
                    <Grid.Row verticalAlign='middle' className="workspace_row">
                        <Grid.Column width={6}>{billPay.pyLabel}</Grid.Column>
                        <Grid.Column width={3}>{billPay.AccountNumber}</Grid.Column>
                        <Grid.Column width={3}>{billPay.BillFirstName}</Grid.Column>
                        <Grid.Column width={3}>{billPay.BillLastName}</Grid.Column>
                        <Grid.Column width={1}>
                            <Image src={process.env.PUBLIC_URL + '/img/bill_pay.png'} style={{width: 50}}/>
                        </Grid.Column>
                    </Grid.Row>
                );
            }
        } else {

        }
    }

    refreshBillPayAccounts() {
        this.props.dispatch(billPayActions.getRegisteredBills());
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6} className="workspace_heading"><h5>Bill</h5></Grid.Column>
                    <Grid.Column width={3} className="workspace_heading"><h5>Account</h5></Grid.Column>
                    <Grid.Column width={3} className="workspace_heading"><h5>First Name (on bill)</h5></Grid.Column>
                    <Grid.Column width={3} className="workspace_heading"><h5>Last Name (on bill)</h5></Grid.Column>
                    <Grid.Column width={1} className="workspace_heading">
                    </Grid.Column>
                </Grid.Row>
                {this.billsDisplay}
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        bills: state.billPay.bills,
        loading: state.billPay.loadingBillPay
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

const connectedBillPay = connect(mapStateToProps, mapDispatchToProps)(BillPay);
export {connectedBillPay as BillPay};