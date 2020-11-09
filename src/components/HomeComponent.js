import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Input,InputGroupAddon,InputGroup,InputGroupText} from 'reactstrap';
import logo from './realestate101.jpg';


class Home extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div style={{display: 'flex', flexDirection:'column', alignSelf: 'center', justifyContent: 'center', alignItems:'center', height: '800px'}} className='search-container'>
                    <h4>Explore your next home!</h4>
                    <InputGroup style={{width: '40%', display: 'flex', justifyContent: 'center', alignItems:'center'}} className='searchBar'>
                        <Input style={{marginBottom: '500px', width:'15px', textAlign: 'center', height:'50px'}} placeholder='Enter city, state, or zipcode' />
                        <InputGroupAddon style={{marginBottom: '500px', height:'50px'}} addonType='append'>
                            <InputGroupText><i className='fa fa-search fa-lg'/></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className='container'>
                    <div style={{marginTop:'10%'}} className='row'>
                        <div className='col'>
                            <h4 style={{textAlign: 'center', fontWeight: '500px', fontSize: '4rem'}}>Most Searched Cities</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <Card>
                                <CardImg width='100%' height='420px'src='/assets/images/philly.jpg' alt='Philadeplphia' />
                                <CardImgOverlay>
                                    <CardTitle>Philadeplphia</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <Card>
                                <CardImg width='100%' height='420px'  src='/assets/images/newyork.jpg' alt='New York' />
                                <CardImgOverlay>
                                    <CardTitle>New York</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <Card>
                                <CardImg width='100%' height='420px' src='/assets/images/sanfrancisco.jpg' alt='San Francisco' />
                                <CardImgOverlay>
                                    <CardTitle>San Francisco</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;