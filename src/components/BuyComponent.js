import React, { Component } from 'react';
import { Card, CardBody,CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderListItem({listing}) {
    return(
        <Card>
            <Link to={`/buy/${listing.id}`}>
                <CardImg width='100%' src={listing.image} atl={listing.name} />
                <CardBody>
                    <CardTitle>{listing.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    )
};

// class Buy extends Component {
//     constructor (props) {
//         super(props);
//     }

    
//     render() {
//         const listings = this.props.listings.maps(listing => {
//             return (
//                 <div>
//                     <RenderListItem listing={listing} />
//                 </div>
//             )
//         });

//         return (
//             <div className='container'>
//                 <div className='row'>
//                     {listings}
//                 </div>
//             </div>
//         )
//     }
// };

function Buy(props) {
    const listings = props.listings.map(listing => {
        return (
            <div key={listing.id} >
                <RenderListItem listing={listing} />
            </div>
        )
    });

    return (
        <div className='container'>
            <div className='row'>
                {/* <div className='col-12 m-5'> */}
                {listings}
                {/* </div> */}
            </div>
        </div>
    )

}

export default Buy;