import * as React from 'react';

export function TravelInspiration(props) {
    return (
        <div>
            <hr></hr>
            <div>{props.heading}</div>
            <div>{props.description}</div>
        </div>
    )
}