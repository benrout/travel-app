import * as React from 'react';
import { QuotesListProps } from '../../models/QuotesModel';

export function Quotes(props: QuotesListProps) {
    return (
        props.quotes.map(quote => {
            return (
                <div className="quote" key={quote.author}>
                    <div className="quote__text font-italic">"{quote.text}"</div>
                    <div className="quote__author">{quote.author}</div>
                </div>
            )
        })
    )
}