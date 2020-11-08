import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'
import { Button, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

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
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFileChange = this.handleFileChange.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit(values) {
        console.log("current state is : " + JSON.stringify(values));
        alert("current state is : " + JSON.stringify(values));
        this.props.addComment(values.name, values.price, values.type,image)
        // event.preventDefault();
    }

    // handleFileChange(event) {
    //     this.setState({ image: event.target.files})
    // }

    // uploadFile = () => {
    //     console.log('I am here')
    //     console.log(this.state.image)
    //     alert(this.state.image)
    // }

    render() {
        return (
            <div className='wrapper'>
          <div className='groupcol'>
              <div className='row'>
                    <div className='column'>
                      <div className='rightcol'>
                          <h4>Thank you for choosing, Abode!!!</h4>
                      </div>
                    </div>
                    <div className='column'>
                        <div className='leftcol'>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor='name' md={3}>Address</Label>
                                    <Col md={9}>
                                        <Control.text model='.name' id='name' name='name'
                                            placeholder='Address'
                                            className='form-control'
                                            // value={this.state.address}
                                            // onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='price' md={3}>Price</Label>
                                    <Col md={9}>
                                        <Control.text model='.price' id='price' name='price'
                                            placeholder='Listing Price'
                                            className='form-control'
                                            // value={this.state.price}
                                            // onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='type' md={3}>Type</Label>
                                    <Col md={9}>
                                        <Control.text model='.type' id='type' name='type'
                                            placeholder='Buy or Rent'
                                            className='form-control'
                                            // value={this.state.price}
                                            // onChange={this.handleInputChange}
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
                                {/* <Row className='form-group'>
                                    <Label htmlFor='image' md={3}> Add Image</Label>
                                    <Col md={9}>
                                        <Control.file id='bath' name='image'
                                            placeholder='Image'
                                            // value={this.state.image}
                                            onChange={this.handleFileChange}
                                            multiple
                                        />
                                        <Button onClick={this.uploadFile}>Upload</Button>

                                    </Col>
                                </Row>  */}
                                <Row className='form-group'> 
                                    <Col md={{ size: 9, offset: 2}}>
                                        <Button type='Submit' color='primary'>
                                            Post Listing
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                
              </div>
          </div>
          </div>
            
        )
    }

}

export default Add;