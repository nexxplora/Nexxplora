import './events.scss';
import data from './data';
import EventCard from '../EventCard/EventCard';


export default function Events(){
    return (
       
        <div className="events" id="events">
        <div className='btn'>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdtfhKUUuPEqTRlON0WjMt_0I513avg_fxYHcKZvSM1-DfwKw/viewform">
            <button> Click To Register</button>
            </a>
        </div>
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