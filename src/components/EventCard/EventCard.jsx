import './EventCard.scss';

export default function EventCard(props){
    return(

        <div className="card">
        <a href={props.url}>
        <img src={props.poster} alt="poster"></img>
        </a>
        <p>{props.description}</p>
        </div>
    );
}