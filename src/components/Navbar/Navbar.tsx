import * as React from 'react';

export function Navbar(props) {
    return (
        <div className="d-flex flex-row">
            <a href="#">Logo</a>
            <div className="ml-auto">
                <a href="#">Flights</a>
                <a href="#">Hotels</a>
                <a href="#">Car Hire</a>
                <a href="#">Holidays</a>
                <a href="#">Discover</a>
                <a href="#">Trip Finder</a>
            </div>
        </div>
    )
}