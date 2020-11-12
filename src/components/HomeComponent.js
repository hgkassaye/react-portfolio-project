import React, { Component } from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardTitle, Input,InputGroupAddon,InputGroup,InputGroupText} from 'reactstrap'; 
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { LoremIpsum } from 'react-lorem-ipsum';


class Home extends Component {
    render() {
        return (
            <div className='wrapper'>
                {/* <div style={{display: 'flex', flexDirection:'column', alignSelf: 'center', justifyContent: 'center', alignItems:'center', height: '800px'}} className='search-container'>
                    <h4>Explore your next home!</h4>
                    <InputGroup style={{width: '40%', display: 'flex', justifyContent: 'center', alignItems:'center'}} className='searchBar'>
                        <Input style={{marginBottom: '500px', width:'15px', textAlign: 'center', height:'50px'}} placeholder='Enter city, state, or zipcode' />
                        <InputGroupAddon style={{marginBottom: '500px', height:'50px'}} addonType='append'>
                            <InputGroupText><i className='fa fa-search fa-lg'/></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div> */}
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='search-container'>
                    {/* <h4>Explore your next home</h4> */}
                    <Input style={{width: '30%', textAlign: 'center', border: 'none'}} placeholder='Enter city, state, or zipcode'/> 
                    <IconContext.Provider value={{color: 'blue', size: '1em', className:'search-icon'}}><FaSearch/></IconContext.Provider>
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
                <div className='grid-container'>
                    <div className='row-one'>
                        <h1 style={{textAlign: 'center', marginTop: '30px'}}>RESOURCES</h1>
                    </div>
                    <div className='row-two'></div>
                    <div className='row-three'></div>
                    <div className='row-four'>
                        <h2>How to apply and secure a mortgage?</h2>
                        <br />
                        <p><LoremIpsum /></p>
                        <Button color='info'> Read More</Button>
                    </div>
                    <div className='row-five'>
                        <h2>Where to start designing your space?</h2>
                        <br />
                        <p><LoremIpsum /></p>
                        <Button color='info'>Read More</Button>
                    </div>
                    <div className='row-six'></div>
                </div>
            </div>
        )
    };
}

export default Home;