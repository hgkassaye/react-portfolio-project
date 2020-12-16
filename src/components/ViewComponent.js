import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

import Map from './MapComponent';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingId: this.props.match.params.listingId,
            listing: {}
        }
    }

    componentDidMount() {
        fetch(baseUrl + `buy/${this.state.listingId}`)
        .then(response => response.json())
        .then(json => { this.setState({ listing: json })})
        .catch( (error) => console.log(error))
    }

    render() {
        const cords = this.state.listing.location
        console.log(cords)
        const uluru = { lat: -25.344, lng: 131.036 }
        return (
            <div className='wrapper'>
                {/* <Container> */}
                    <Row>
                        <Col md={6} >
                            <Map center={cords} zoom={10}/>
                        </Col>

                        <Col>
                            <h1>{this.state.listing.name}</h1>
                            
                        </Col>
                    </Row>

                {/* </Container> */}
                
                
            </div>
        )
    }
}

export default View;