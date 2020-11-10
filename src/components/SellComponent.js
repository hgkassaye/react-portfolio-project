import React, { Component, useState } from 'react';
import { Card, CardBody,CardImg, CardTitle, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, UncontrolledCarousel, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderImageItem = (info) => {
    const imagelist = info.info
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === imagelist.length - 1 ? 0 : activeIndex + 1 ;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? imagelist.length - 1 : activeIndex - 1 ;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return ;
        setActiveIndex(newIndex);
    }
    
    const slides = imagelist.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.image}
            >
                <img width='100%' src={baseUrl + item} alt='Image not found' />
            </CarouselItem>
        );
    });
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={imagelist} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    )
}



function Rent(props) {
    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return <h4>{props.errMess}</h4>
    }
    const listings = props.listings.filter(listing => listing.type === 'rent')

    const listingItem = listings.map(listing => {
        return (
            <div className='col-md-6'>
                <Card>
                    <RenderImageItem info={listing.image}/>
                    <CardBody>
                        <CardTitle>
                            <h4>{listing.price}</h4>
                        </CardTitle>
                        <CardSubtitle>{listing.name}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    })


    return (
        <div className='wrapper'>
            <div className='row'>
                {listingItem}
            </div>
        </div>
    )
}



export default Rent;