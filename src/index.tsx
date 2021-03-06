import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.scss";
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Quotes } from './components/Quotes/Quotes';
import { Footer } from './components/Footer/Footer';
import { TravelInspiration } from './components/TravelInspiration/TravelInspiration';
import { TrendingDestinations } from './components/TrendingDestinations/TrendingDestinations';
import { ITrendingDestination } from './models/TrendingDestinationsModel';
import { IQuote } from './models/QuotesModel';

const trendingCities: ITrendingDestination[] = [
    {
        title: 'Sydney',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Havana',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'San Jose',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Buenos Aires',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'London',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Dubai',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }
]

const trendingCountries: ITrendingDestination[] = [
    {
        title: 'United Kingdom',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Spain',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Italy',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'France',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Germany',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        title: 'Portugal',
        imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }
]

const quotes: IQuote[] = [
    {
        text: "Quote 1",
        author: "Author 1"
    },
    {
        text: "Quote 2",
        author: "Author 2"
    },
    {
        text: "Quote 3",
        author: "Author 3"
    },
]

function App(props) {
    return (
        <React.Fragment>
            <div className="container">
                <Navbar />
                <div className="heading">Find and compare flights</div>
                <Search />
                <TravelInspiration heading="Travel Inpsiration" description="Our latest travel tips, expert hacks and industry insights to help make your journey one to remember" />
                <TrendingDestinations destinationType="cities" destinations={trendingCities} />
                <TrendingDestinations destinationType="countries" destinations={trendingCountries} />
                <Quotes quotes={quotes} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

function getElement() {
    var el = document.getElementById('app');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app';
        document.querySelector('body').appendChild(el);
    }
    return el;
}

ReactDOM.render(<App />, getElement());