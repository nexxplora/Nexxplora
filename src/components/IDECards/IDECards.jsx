import './IDECards.scss';
import {SiCplusplus,SiJava,SiPython} from 'react-icons/si';
import FadeIn from 'react-fade-in/lib/FadeIn';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {useState,useEffect} from 'react';
import Loading from '../loading/loading';

function IDECards() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2500)
    }, [])
  


        
           if(loading===false){
               return( <div className="IDECards">
            <span className="back"><HashLink to="/#resources" className="link"> <BsFillArrowLeftCircleFill/></HashLink></span>
            <FadeIn delay={500} className="Cards" >
            <div className="lang">
            <Link to="/c++">
            <SiCplusplus  className="icon"/>
            </Link>
            <h3>C++</h3>
            </div>
            <div className="lang">
            <Link to="/java"><SiJava className="icon"/></Link>
            <h3>Java</h3></div>
            <div className="lang">
            <Link to="/python">
            <SiPython className="icon"/>
            </Link>
            <h3>Python</h3></div>
            </FadeIn>
            </div>);
           }
           else
           return (<Loading/>);
   
}

export default IDECards;
