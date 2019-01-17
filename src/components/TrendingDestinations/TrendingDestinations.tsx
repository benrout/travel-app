import * as React from 'react';
import "./TrendingDestinations.scss";
import { TrendingDestinationListProps } from '../../models/TrendingDestinationsModel';

export function TrendingDestinations(props: TrendingDestinationListProps) {

    return (
        <div>
            <hr></hr>
            <div className="text-center">Trending {props.destinationType}</div>
            <div className="text-center">The most searched {props.destinationType} on TravelApp</div>
            <div className="d-flex flex-row flex-wrap">
                {props.destinations.map(destination => {
                    const imageStyles = {
                        backgroundImage: `url(${destination.imageUrl})`
                    }
                    return (
                        <div key={destination.title} className="col-lg-4 trending-destination row">
                            <div className="col-6 trending-destination__image" style={imageStyles}></div>
                            <div className="col-6 trending-destination__details">
                                <div>Flights to</div>
                                <div>{destination.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}