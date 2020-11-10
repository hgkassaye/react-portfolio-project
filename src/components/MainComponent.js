import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Buy from './BuyComponent';
import Rent from './SellComponent';
import Add from './AddListing';
import Favorite from './SavedComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addListing, postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        listings: state.listings,
        favorites: state.favorites
    }
}

const mapDispatchToProps = {
    addListing: (name, price, type, image ) => (addListing(name, price, type, image)),
    postFavorite: (id) => (postFavorite(id))
}

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='main-container'>
                <Header />
                <Switch>
                    <Route path='/home'> <Home /> </Route>
                    <Route exact path='/buy' render={() => <Buy listings={this.props.listings} favorites={this.props.favorites} postFavorite={this.props.postFavorite} />} />
                    <Route exact path='/rent' render={() => <Rent listings={this.props.listings} />} />
                    <Route exact path='/list' render={() => <Add addListing={this.props.addListing} />} />
                    <Route exact path='/favorite' render={() => <Favorite listings={this.props.listings} favorites={this.props.favorites}/>} />
                    <Redirect to='/home' /> 
                </Switch>
                <Footer />
                </div>
                {/* </div> */}
            </React.Fragment>
        )
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));