import * as React from 'react';
import "./Search.scss";

export function Search(props) {
    return (
        <div className="search">
            <div>
                <button>One-way</button>
                <button>Return</button>
                <button>Multi-city</button>
            </div>
            <form>
                <input type="text" name="fromLocation" placeholder="From where?" />
                <input type="text" name="toLocation" placeholder="To where?" />
                <input type="date" name="fromDate" />
                <input type="date" name="toDate" />
                <input type="number" name="passengers" />
                <input type="submit" value="Search" name="search" />
            </form>
            <div>
                <input type="checkbox" name="newsletter" id="newsletter" />
                <label htmlFor="newsletter">Receive our travel deals newsletter</label>
            </div>
        </div>
    )
}