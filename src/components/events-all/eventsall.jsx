import './eventsall.scss';
import data from './events-all'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { HashLink } from 'react-router-hash-link';
import{useState,useEffect} from 'react';
import Loading from '../loading/loading';
function EventCards(props){
    return(

        <div className="cards">
        <a href={props.url}>
        <img src={props.poster} alt="poster"></img>
        </a>
        <p>{props.description}</p>
        
        </div>
    );
}



export default function EventsAll(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2500)
    }, [])
  
       
        if(loading===false) {  return(<div className="events" id="events">
        <div className="eventHead">
        <span className="back"><HashLink to="/#events" className="link"> <BsFillArrowLeftCircleFill/></HashLink></span>
            <h1>Events</h1>
        </div>
        <div >
        <FadeIn delay={500} className="content">
        {data.map(item =>{
           return (
               
          <EventCards poster={item.poster} description={item.description} url={item.url} />
         );
                
        })}
         </FadeIn>
        </div>

        </div>);}
        else{
            return (<Loading/>);
        }
    
        
  
}