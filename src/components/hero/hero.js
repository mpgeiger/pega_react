import React, {Component} from "react";
import {connect} from "react-redux";
import {Header, Image} from "semantic-ui-react";
import {heroActions} from "../../store/actions";

class Hero extends Component {

    componentDidMount() {
        this.refreshHero(this.props.current);
    }

    render() {
        return (
            <Header as="h2" textAlign="center">
                <Image src={process.env.PUBLIC_URL + this.props.heroUrl} style={{width: 500}}/>
            </Header>
        );
    }

    refreshHero() {
        this.setState({loadingHero: true});
        /*this.props
            .dispatch(heroActions.getHero(''))
            .then(() => this.setState({ loading: false }));*/
        this.props
            .dispatch(heroActions.getHero(''));
        // console.log(JSON.stringify(this.props));
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        heroUrl: state.hero.heroUrl,
        loading: state.hero.loading
    };
}

const connectedHero = connect(mapStateToProps)(Hero);
export {connectedHero as Hero};