import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            idModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState ({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert ('logged in');
        this.toggleModal();
        event.preventdefault();
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
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/favorite' onClick={this.toggleNav}>Saved</NavLink>
                                </NavItem>
                            </Nav>  
                            {/* <Nav navbar className='ml-auto' style={{marginLeft: 'px', textAlign: 'center', justifyContent: 'center'}}>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/new' onClick={this.toggleNav}>SAVED</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link' to='/list' onClick={this.toggleNav}>SIGN IN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{paddingRight: '25px'}} className='nav-link lef-content' to='/list' onClick={this.toggleNav}>CREATE ACCOUNT</NavLink>
                                </NavItem>
                            </Nav> */}
                            <span className='ml-auto'>
                                <Button style={{marginLeft: '15px'}} outline onClick={this.toggleModal}>Login</Button>
                                <Button style={{marginLeft: '15px'}} outline onClick={this.toggleModal}>Create Account</Button>
                            </span>
                        </Collapse>
                    {/* </div> */} 
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username' />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password' />
                            </FormGroup>
                            <FormGroup check>
                                <label Check>
                                    <Input type='checkbox' name='remember' />
                                    Remember me!
                                </label> 
                            </FormGroup>
                            <Button type='submit' value='submit' color='primary'>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    };
}

export default Header;


