import React, { Component } from 'react';
import { baseUrl } from '../shared/baseUrl';

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
        return (
            <div>
                <h1>Hello World</h1>
                <h1>{this.state.listing.name}</h1>
            </div>
        )
    }
}

export default View;