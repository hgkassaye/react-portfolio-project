import React, { Component, useContext } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'
import { Button, Label, Container,Col, Row} from 'reactstrap';
import { Control, LocalForm, actions } from 'react-redux-form';

const image = ['assets/images/homeone/home-one.jpg','assets/images/homeone/home-two.jpg','assets/images/homeone/home-three.jpg','assets/images/homeone/home-four.jpg' ]
class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            price:'',
            bed: '',
            bath: '',
            sqft: '',
            type: '',
            propertytype: '',
            image: []
            // image: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        // this.props.addListing(values.name, values.price, values.type,image)
        this.props.postListing(values.name, values.price, values.type, values.image)
        // event.preventDefault();
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('price', values.price)
        formData.append('type', values.type)
        // formData.append('image', values.image[0])
        // formData.append('image', values.image[1])
        for (let i = 0; i < values.image.length; i++) {
            formData.append('image', values.image[i])
        }
        
        this.props.postListing(formData)
    }

    resetForm() {
        this.setState({
            address: '',
            price: '',
            type: '',
            propertytype: ''
        })
    }


    render() {
        return (
            <div className='wrapper'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <h4>Thank you for choosing abode!</h4>
                            <span>Let us help you spread the word</span>
                        </Col>
                        <Col sm={12} md={6}>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor='name' md={3}>Address</Label>
                                    <Col md={9}>
                                        <Control.text model='.name' id='name' name='name'
                                            placeholder='Address'
                                            className='form-control'
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='price' md={3}>Price</Label>
                                    <Col md={9}>
                                        <Control.text model='.price' id='price' name='price'
                                            placeholder='Listing Price'
                                            className='form-control'
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='type' md={3}>Type</Label>
                                    <Col md={9}>
                                        <Control.text model='.type' id='type' name='type'
                                            placeholder='Buy or Rent'
                                            className='form-control'
                                        />
                                    </Col>
                                </Row>
                                {/* <Row className='form-group'>
                                    <Label htmlFor='beds' md={3}> Bedroom Count</Label>
                                    <Col md={9}>
                                        <Control.text id='bed' name='bed'
                                            placeholder='Number of Bedrooms'
                                            value={this.state.bed}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </Row> 
                                <Row className='form-group'>
                                    <Label htmlFor='bath' md={3}> Bathroom Count</Label>
                                    <Col md={9}>
                                        <Control.text id='bath' name='bath'
                                            placeholder='Number of Bathrooms'
                                            value={this.state.bath}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </Row>  */}
                                <Row className='form-group'>
                                    <Label htmlFor='image' md={3}> Add Image</Label>
                                    <Col md={9}>
                                        <Control.file model='.image' id='image' name='image'
                                            placeholder='Image'
                                            className='form-control'
                                            // value={this.state.image}
                                            // onChange={this.handleFileChange}
                                            multiple
                                        />
                                        {/* <Button onClick={this.uploadFile}>Upload</Button> */}

                                    </Col>
                                </Row> 
                                <Row className='form-group'> 
                                    <Col md={{ size: 9, offset: 2}}>
                                        <Button className='form-control' type='Submit' color='primary' >
                                            Post Listing
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </Col>
                    </Row>

                </Container>
            </div>
            
        )
    }
  

}

export default Add;