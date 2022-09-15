import './events.scss';
import data from './data';
import EventCard from '../EventCard/EventCard';


export default function Events(){
    return (
       
        <div className="events" id="events">
        <div className='head'>Events</div>
        <div className='cards'>
        {data.map(item =>{
           return (
               
          <EventCard poster={item.poster} 
          title={item.title} 
          incharge={item.incharge} 
          faculty={item.faculty} 
          winners={item.winners}
           volunteers={item.volunteers} 
           phone={item.phone}/>
         );
                
        })}
        </div>

        </div>
    
        
    );
}