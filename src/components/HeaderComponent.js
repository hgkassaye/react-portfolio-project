import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h1>Abode</h1>
                                <h2>Let us help you find your next home</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar light expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>Abode</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/buy'>Buy</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/sell'>Sell</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/rent'>Rent</NavLink>
                                </NavItem>
                            </Nav>  
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    };
}

export default Header;
