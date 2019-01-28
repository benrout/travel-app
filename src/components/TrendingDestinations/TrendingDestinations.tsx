import * as React from 'react';
import "./TrendingDestinations.scss";
import { TrendingDestinationListProps } from '../../models/TrendingDestinationsModel';

export function TrendingDestinations(props: TrendingDestinationListProps) {

    return (
        <div>
            <hr></hr>
            <div className="text-center">Trending {props.destinationType}</div>
            <div className="text-center">The most searched {props.destinationType} on TravelApp</div>
            <div className="row">
                {props.destinations.map(destination => {
                    const imageStyles = {
                        backgroundImage: `url(${destination.imageUrl})`
                    }
                    return (
                        <div key={destination.title} className="col-lg-4">
                            <div className="trending-destination d-flex flex-row">
                                <div className="trending-destination__image w-50" style={imageStyles}></div>
                                <div className="trending-destination__details w-50">
                                    <div>Flights to</div>
                                    <div>{destination.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}