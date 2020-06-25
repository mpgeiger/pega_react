import React, {Component} from "react";
import {connect} from "react-redux";
import {customerInfoActions} from "../../../store/actions";
import {Icon} from "semantic-ui-react";

class CustomerInfo extends Component {

    constructor(props) {
        super(props);
        this.customer = {
            fullName: 'name',
            email: 'email',
            street: 'street address',
            city: 'city',
            state: 'state',
            country: 'country',
            zip_code: 'zip code'
        };
    }

    componentDidMount() {
        this.refreshCustomerInfo()
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps) {
            if (!nextProps.loading) {
                this.customer.email = nextProps.customer.EmailAddress;
                this.customer.fullName = nextProps.customer.FullName;
                this.customer.street = nextProps.customer.Street;
                this.customer.city = nextProps.customer.City;
                this.customer.state = nextProps.customer.State;
                this.customer.country = nextProps.customer.Country;
                this.customer.zip_code = nextProps.customer.ZIPCode;
            }
        } else {

        }
    }

    getCustomer() {
        return (
            <div>
                <div align="right">
                    <a href="#" onClick={() => this.refreshCustomerInfo()}>
                        <Icon name="refresh"></Icon>
                    </a>
                </div>
                <h5>{this.customer.fullName}</h5>
                <i>{this.customer.email}</i><br/>
                <br/>
                {this.customer.street}<br/>
                {this.customer.city}, {this.customer.State}, {this.customer.zip_code} +
                {this.customer.country}
            </div>
        );
    }

    refreshCustomerInfo() {
        this.props.dispatch(customerInfoActions.getCustomerInfo());
    }

    render() {
        return (
            <div>
                {this.getCustomer()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customer: state.customerInfo.customer,
        loading: state.customerInfo.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
};

const connectedCustomerInfo = connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);
export {connectedCustomerInfo as CustomerInfo};