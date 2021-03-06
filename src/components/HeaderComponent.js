import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // username: '',
            // password: '',
            // userToken: localStorage.getItem('token'),
            reloadPage: false,
            isNavOpen: false,
            isLogInModalOpen: false,
            isSignUpModalOpen: false,
        };
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleSignupModal = this.toggleSignupModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignout = this.handleSignout.bind(this);
    }
    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLoginModal() {
        this.setState ({
            isLogInModalOpen: !this.state.isLogInModalOpen
        });
    }

    toggleSignupModal() {
        this.setState ({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        })
    }


    handleLogin(event) { 
        event.preventDefault();
        this.toggleLoginModal();

        const logIn = {
            "username": event.target.username.value,
            "password": event.target.password.value
        }

        fetch(baseUrl + 'user/login', {
            method: "POST",
            body: JSON.stringify(logIn),
            headers: {'Content-Type':'application/json'}
        })
        // .then(response => console.log(response.json()))
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // console.log(data.token)
                localStorage.setItem('token', data.token)
                this.setState ({
                    reloadPage: !this.state.reloadPage
                })
                const token = localStorage.getItem('token')
                console.log(token)
            }
        })
        .catch(error => console.log(error))

    }

    handleSignup(event) {
        event.preventDefault();
        const userInfo = {
            'firstName' : event.target.firstname.value,
            'lastName' : event.target.lastname.value,
            'username' : event.target.username.value,
            'password' : event.target.password.value
        }
        
        fetch(baseUrl + 'user/signup', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        alert ('logged in');
        // this.toggleLoginModal();
        
    }

    handleSignout() {
        localStorage.removeItem('token')
        this.setState ({
            reloadPage: !this.state.reloadPage
        })
    }

    
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky='top' expand='lg'>
                    {/* <div className='container'> */}
                        <NavbarBrand className='mr-auto' href='/'><img src='/assets/images/logo.png' height='100' width='100' alt='Abode Logo' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto' style={{marginLeft: '90px', textAlign: 'center', justifyContent: 'center'}}>
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
                                {!localStorage.getItem('token') && (
                                    <>
                                        <Button style={{marginLeft: '15px'}} outline onClick={this.toggleLoginModal}>Login</Button>
                                        <Button style={{marginLeft: '15px'}} outline onClick={this.toggleSignupModal}>Create Account</Button>
                                    </>
                                )}
                                {localStorage.getItem('token') && (
                                    <Button type='submit' style={{marginLeft: '15px'}} outline onClick={()=>this.handleSignout()}>Sign Out</Button>
                                )}
                            </span>
                        </Collapse>
                    {/* </div> */} 
                </Navbar>

                <Modal isOpen={this.state.isLogInModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
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

                <Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignupModal}>
                    <ModalHeader toggle={this.toggleSignupModal}>Signup</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor='firstname'>First Name</Label>
                                <Input type='text' id='firstname' name='firstname' />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='lastname'>Last Name</Label>
                                <Input type='text' id='lastname' name='lastname' />
                            </FormGroup>
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


