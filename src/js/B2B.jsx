import React from 'react';
import ReactDOM from 'react-dom';
import flashcard_data from './flashcards.js';
import itinerary_data from './itinerary.js';

class Header extends React.Component {
    render() {
        return <div
            className='header-container'>
            <h1>{this.props.text}</h1>
            <h2>{this.props.subtext}</h2>
        </div>
    }
}

class MainHeader extends React.Component {
    render() {
        return <div
            className='header-main'>
            <h1>{this.props.text}</h1>
            <h2>{this.props.subtext}</h2>
        </div>
    }
}

class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: true,
        };
    }

    handleClick(e) {
        this.setState({
            front : !this.state.front,
        });
    }

    render() {
        if (this.props.count % 2 == 0) {
            return <div
                className='flashcard'
                onClick={ e => this.handleClick(e)}>
                <div className='flashcard-photo'
                     style={{
                         backgroundImage: this.state.front ? `url(images/bangkoktobali/${this.props.image}.jpg)` : 'none',
                     }}
                />
                <div className='flashcard-description'>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.location}</h3>
                    <h3>{this.props.country}</h3>
                    <h4><a href={this.props.info}>More info</a></h4>
                </div>
            </div>
        } else {
            return <div
                className='flashcard'
                onClick={ e => this.handleClick(e)}>
                <div className='flashcard-description'>
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.location}</h3>
                    <h3>{this.props.country}</h3>
                    <h4><a href={this.props.info}>More info</a></h4>
                </div>
                <div className='flashcard-photo'
                     style={{
                         backgroundImage: this.state.front ? `url(images/bangkoktobali/${this.props.image}.jpg)` : 'none',
                     }}
                />
            </div>
        }
    }
}

class Flashcards extends React.Component {
    render() {
        const flashcards = flashcard_data.map((el,i) => <Flashcard key={i} count={i} location={el.location} country={el.country} name={el.name} image={el.image} info={el.info}/>);

        return <div className='flashcard-container'>
            <Header text='What to do' subtext='From 30 meters above to 18 meters below - and everything in between'/>
            {flashcards}
        </div>;

    }
}

class PackingList extends React.Component {
    render() {
        return <div className='packingList-container'>
            <Header text='What to bring' subtext="If you've packed more than a 7kg carry-on, you've packed too much"/>
            <div className='packingList'>
                The Core Components:
                <ul>
                    <li>3 T-Shirts (quick-dry)</li>
                    <li>1 Pair Shorts (quick-dry)</li>
                    <li>1 Long Skirt / Pants</li>
                    <li>Towel</li>
                    <li>Rain Jacket</li>
                    <li>Sandals</li>
                    <li>Sneakers</li>
                    <li>Bathing Suit</li>
                    <li>Other (just make sure it's light and dries fast)</li>
                </ul>
            </div>
        </div>;

    }
}

class Map extends React.Component {
    render() {
        return <div className='map'/>
    }
}

class ItineraryItem extends React.Component {
    render() {
        return <div className='itinerary-item'>
            <h4 style={{marginLeft: '20px'}}>{this.props.date}</h4>
            <div className='itinerary-block'
                    style={{
                        backgroundColor: `#${this.props.color}`,
                        width: '25px',
                        height: '25px',
                        marginLeft: '10px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    }}/>
            {this.props.start=='y' ? <div className='itinerary-description'><h4>{this.props.city}</h4><p>{this.props.description}</p></div> : ''}
        </div>
    }
}

class Itinerary extends React.Component {
    render() {
        const itinerary_items = itinerary_data.map((el, i) => <ItineraryItem key={i} color={el.color} start={el.start} date={el.date} city={el.city} description={el.description}/>);

        return <div className='itinerary'>
            <Header text='Where to go' subtext='We started our trip with only the first night in Bangkok booked. This is where the adventure took us!'/>
            {itinerary_items}
        </div>;

    }
}

class B2B extends React.Component {

    render() {
        return <div className='B2B'>
            <MainHeader text='Bangkok to bali' subtext='Four weeks of adventure in South East Asia'/>
            <PackingList/>
            <Itinerary/>
            <Header subtext='Zoom into map to take a closer look at the destinations (color coded based on the itinerary above)'/>
            <Map/>
            <Flashcards/>
        </div>

    }
}

export default B2B;