import './events.scss';
import data from './events';
import EventCard from '../EventCard/EventCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Events(){
    return (
       
        <div className="events" id="events">
        <div className="eventHead">
            <h1>Events</h1>
        </div>
        <div className="content">
        {data.map(item =>{
           return (
          <EventCard poster={item.poster} description={item.description} url={item.url} />);
        })}
        </div>
        <div className="button">
        <Link to="/events" className="link"><button>View More</button></Link>
        </div>

        </div>
    
        
    );
}