import './EventCard.scss';
import {BsCalendarCheck} from 'react-icons/bs';
import {BiTime} from 'react-icons/bi';
import {ImLocation} from 'react-icons/im';
export default function EventCard(props){
    console.log(props.desc);
    return(
        
        <div className="card">
        <div className='title'>{props.title}</div>
        <div className='dtl'>
            <span><BsCalendarCheck className='icon'/><p>{props.date}</p></span>
            <span><BiTime className='icon'/><p>{props.time}</p></span>
            <span><ImLocation className='icon'/><p>{props.location}</p></span>
        </div>
        {/* <div className='poster'><img src={props.poster}></img></div> */}
        <div className='desc'><p>
        {props.desc}
        </p></div>
        <h4>Incharges:</h4>
        <div className='incharge content'>
       
            {props.incharge.map(item =>{
           return (
            <p>{item}</p>
         );        
        })}
        </div>
        <h4>Volunteers:</h4>
        <div className='volunteers content'>
      
            {props.volunteers.map(item =>{
           return (
               <p>{item}</p>
         );        
        })}
        </div>
        <h4>Faculty:</h4>
        <div className='faculty content'>
     
            {props.faculty.map(item =>{
           return (
            <p>{item}</p>
         );        
        })}
        </div>
        <h4>Winners:</h4>
        <div className='winners content'>
     
            {props.winners.map(item =>{
           return (
            <p>{item}</p>
         );        
        })}
        </div>
        <div className='btn'>
        <a href={props.phone} class="button">Call</a>
        </div>
        
        </div>
    );
}