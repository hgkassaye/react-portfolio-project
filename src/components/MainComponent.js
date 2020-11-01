import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Buy from './BuyComponent';
import Sell from './SellComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home'> <Home /> </Route>
                    <Route path='/buy'> <Buy /> </Route>
                    <Route path='/sell'> <Sell /> </Route>
                    <Redirect to='/home' /> 
                </Switch>
                <Footer />
            </React.Fragment>
        )
    };
}


export default Main;