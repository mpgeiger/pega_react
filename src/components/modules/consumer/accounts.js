import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, Icon, Image} from "semantic-ui-react";
import {accountActions} from "../../../store/actions";

const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

class Accounts extends Component {

    constructor(props) {
        super(props);
        this.accountDisplay = <div>No accounts loaded</div>
    }

    componentDidMount() {
        this.refreshAccounts()
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps) {
            if (!nextProps.loading) {
                this.accountDisplay = nextProps.accounts.map((account) =>
                    <Grid.Row verticalAlign='middle' className="workspace_row" key={account.pyGUID}>
                        <Grid.Column width={2}>{account.Category}</Grid.Column>
                        <Grid.Column width={4}>{account.Nickname}</Grid.Column>
                        <Grid.Column width={2}>{account.AccountDisplay}</Grid.Column>
                        <Grid.Column width={2}>{numberFormat(account.Balance)}</Grid.Column>
                        <Grid.Column width={2}>{numberFormat(account.CreditLimit)}</Grid.Column>
                        <Grid.Column width={4}>
                            <Image src={process.env.PUBLIC_URL + account.ImageUrl} style={{width: 200}}/>
                        </Grid.Column>
                    </Grid.Row>
                );
            }
        } else {

        }
    }

    refreshAccounts() {
        this.props.dispatch(accountActions.getAccounts());
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} className="workspace_heading"><h5>Category</h5></Grid.Column>
                    <Grid.Column width={4} className="workspace_heading"><h5>Nickname</h5></Grid.Column>
                    <Grid.Column width={2} className="workspace_heading"><h5>Account Number</h5></Grid.Column>
                    <Grid.Column width={2} className="workspace_heading"><h5>Current Balance</h5></Grid.Column>
                    <Grid.Column width={2} className="workspace_heading"><h5>Credit Limit</h5></Grid.Column>
                    <Grid.Column width={4} className="workspace_heading" textAlign="right">
                        <a href="#" onClick={() => this.refreshAccounts()}>
                            <Icon name="refresh"></Icon>
                        </a>
                    </Grid.Column>
                </Grid.Row>
                {this.accountDisplay}
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts.accounts,
        loading: state.accounts.loadingAccounts
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

const connectedAccounts = connect(mapStateToProps, mapDispatchToProps)(Accounts);
export {connectedAccounts as Accounts};