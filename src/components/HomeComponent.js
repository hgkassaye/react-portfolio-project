import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import logo from './realestate101.jpg';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardImg width='100%' height='100%' src={logo} alt='notfound'></CardImg>
                </Card>
            </React.Fragment>
        )
    };
}

export default Home;