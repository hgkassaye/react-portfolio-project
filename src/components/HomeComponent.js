import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Input,InputGroupAddon,InputGroup,InputGroupText } from 'reactstrap';
import logo from './realestate101.jpg';

class Home extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '600px'}} className='container'>
                <InputGroup style={{width: '60%', display: 'flex', justifyContent: 'center', alignItems:'center'}} className='searchBar'>
                    <Input style={{marginBottom: '500px', textAlign: 'center', height:'50px'}} placeholder='Enter city, state, or zipcode' />
                    <InputGroupAddon style={{marginBottom: '500px', height:'50px'}} addonType='append'>
                        <InputGroupText><i className='fa fa-search fa-lg'/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    };
}

export default Home;