import * as React from 'react';

export function Quote(props) {
    return (
        <div className="quote">
            <div className="quote__text font-italic">"{props.text}"</div>
            <div className="quote__author">{props.author}</div>
        </div>
    )
}