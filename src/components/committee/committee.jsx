import './committee.scss'
import team from './team'
import TeamCard from '../TeamCard/TeamCard';
export default function Committee() {
    return (
        <div className="committee" id="committee">
          <div className="section-head">
              <h1>Know our team</h1>
          </div>
          <div className="content">
              <div className="card-wrapper">
              {team.map(item =>{
             return (
                <TeamCard name={item.name} title={item.title} image={item.image} url={item.url}  />);
                })}
              </div>
          </div>  
        </div>
    )
}
