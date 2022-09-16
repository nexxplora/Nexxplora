import './events.scss';
import data from './data';
import EventCard from '../EventCard/EventCard';


export default function Events(){
    return (
       
        <div className="events" id="events">
       
        <div className='orgs'>
        <h3>Contact Us:</h3>
           <button className='person'>
            <a href="tel:8601282403">Ritwik Sinha</a>
           </button>
           <button className='person'>
            <a href="tel:8954535590">Prakhar Saxena</a>
           </button>
           <button className='person'>
            <a href="tel:8090664264">Akash Singh</a>
           </button>
           <button className='person'>
            <a href="tel:6394039425">Neelesh Prajapati</a>
           </button>
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
           phone={item.phone}
            desc={item.desc}
            date={item.date}
            time={item.time}
            location={item.location}
           />
         );
                
        })}
        </div>

        </div>
    
        
    );
}