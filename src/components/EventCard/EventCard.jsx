import './EventCard.scss';

export default function EventCard(props){
    return(

        <div className="card">
        <div className='title'>{props.title}</div>
        <div className='poster'><img src={props.poster}></img></div>
        <div className='incharge content'>
        <h4>Incharges:</h4>
            {props.incharge.map(item =>{
           return (
            <p>{item}</p>
         );        
        })}
        </div>
        <div className='volunteers content'>
        <h4>Volunteers:</h4>
            {props.volunteers.map(item =>{
           return (
               <p>{item}</p>
         );        
        })}
        </div>
        <div className='faculty content'>
        <h4>Faculty:</h4>
            {props.faculty.map(item =>{
           return (
            <p>{item}</p>
         );        
        })}
        </div>
        <div className='winners content'>
        <h4>Winners:</h4>
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