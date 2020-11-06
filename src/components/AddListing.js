import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'


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
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("current state is : " + JSON.stringify(this.state));
        alert("current state is : " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleFileChange(event) {
        this.setState({ image: event.target.files})
    }

    uploadFile = () => {
        console.log('I am here')
        console.log(this.state.image)
        alert(this.state.image)
    }

    render() {
        return (
          <div className='groupcol'>
              <div className='row'>
                    <div className='column'>
                      <div className='rightcol'>
                          <h4>Thank you for choosing, Abode!!!</h4>
                      </div>
                    </div>
                    <div className='column'>
                        <div className='leftcol'>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor='address' md={3}>Address</Label>
                                    <Col md={9}>
                                        <Input Type='text' id='address' name='address'
                                            placeholder='Address'
                                            value={this.state.address}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='price' md={3}>Price</Label>
                                    <Col md={9}>
                                        <Input type='text' id='price' name='price'
                                            placeholder='Listing Price'
                                            value={this.state.price}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor='beds' md={3}> Bedroom Count</Label>
                                    <Col md={9}>
                                        <Input type='text' id='bed' name='bed'
                                            placeholder='Number of Bedrooms'
                                            value={this.state.bed}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup> 
                                <FormGroup row>
                                    <Label htmlFor='bath' md={3}> Bathroom Count</Label>
                                    <Col md={9}>
                                        <Input type='text' id='bath' name='bath'
                                            placeholder='Number of Bathrooms'
                                            value={this.state.bath}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup> 
                                <FormGroup row>
                                    <Label htmlFor='image' md={3}> Add Image</Label>
                                    <Col md={9}>
                                        <Input type='file' id='bath' name='image'
                                            placeholder='Image'
                                            // value={this.state.image}
                                            onChange={this.handleFileChange}
                                            multiple
                                        />
                                        <Button onClick={this.uploadFile}>Upload</Button>

                                    </Col>
                                </FormGroup> 
                                <FormGroup row> 
                                    <Col md={{ size: 9, offset: 2}}>
                                        <Button type='Submit' color='primary'>
                                            Post Listing
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                
              </div>
          </div>
            
        )
    }

}

export default Add;