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
                <Navbar light sticky='top' expand='lg'>
                    {/* <div className='container'> */}
                        <NavbarBrand className='mr-auto' href='/'><img src='/assets/images/logo.png' height='100' width='100' alt='Abode Logo' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='mr-auto' style={{marginLeft: '90px', textAlign: 'center', justifyContent: 'center'}}>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/home' onClick={this.toggleNav}>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/buy' onClick={this.toggleNav}>BUY</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/rent' onClick={this.toggleNav}>RENT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/list' onClick={this.toggleNav}>ADD LISTING</NavLink>
                                </NavItem>
                            </Nav>  
                            <Nav navbar className='ml-auto' style={{marginLeft: '90px', textAlign: 'center', justifyContent: 'center'}}>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/list' onClick={this.toggleNav}>SAVED</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/list' onClick={this.toggleNav}>SIGN IN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link lef-content' to='/list' onClick={this.toggleNav}>CREATE ACCOUNT</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    {/* </div> */}
                </Navbar>
            </React.Fragment>
        )
    };
}

export default Header;


