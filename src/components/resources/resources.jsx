import './resources.scss';
import {BsCodeSquare} from 'react-icons/bs';
import {GiBlackBook} from 'react-icons/gi';
import { Link } from 'react-router-dom';
export default function Resources(){
    return (
        
        <div className="resources" id="resources">
        <div className="rschead"><h1>Resources</h1></div> 
        <div className="cards">
        <div className="ideCard">
        <h2>Online IDE</h2>
        <span className="icon"><Link to="/IDE" className="link"><BsCodeSquare/>  </Link></span>
        <p className="caption">Click the icon to open.</p>
        </div>
        <div className="studyMaterial">
        <h2>Study Material</h2>
        <span className="icon"><a href="https://drive.google.com/drive/u/0/folders/1cHmPHu52ORozHNKz8iN0NEjcVFjSEUlu" className="link"><GiBlackBook/> </a></span>
        <p className="caption">Click the icon to open.</p>
        </div>
        </div>
        
        </div>
      
    );
}