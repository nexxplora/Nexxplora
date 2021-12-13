import './TeamCard.scss';
import {BsLinkedin} from 'react-icons/bs';

function TeamCard(props) {
    return (
        <div className="team-card">
            <img src={props.image} alt="profile"></img>
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
            <span className="icon"><a href={props.url}><BsLinkedin className="item"/></a></span>
        </div>
    );
}

export default TeamCard;
