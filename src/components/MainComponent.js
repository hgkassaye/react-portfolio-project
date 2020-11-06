import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Buy from './BuyComponent';
import Rent from './SellComponent';
import Add from './AddListing'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        listings: state.listings
    }
}

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home'> <Home /> </Route>
                    <Route exact path='/buy' render={() => <Buy listings={this.props.listings} />} />
                    <Route exact path='/rent' render={() => <Rent listings={this.props.listings} />} />
                    <Route exact path='/list' render={() => <Add />} />
                    <Redirect to='/home' /> 
                </Switch>
                <Footer />
            </React.Fragment>
        )
    };
}


export default withRouter(connect(mapStateToProps)(Main));