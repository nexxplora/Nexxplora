import react, { useState } from 'react';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Events from './components/events/events.jsx';
import Resources from './components/resources/resources';
import './app.scss';
import Committee from './components/committee/committee';
import Contact from './components/Contact/Contact';
import EventsAll from './components/events-all/eventsall';
import IDECards from './components/IDECards/IDECards';

import Cplusplus from './components/IDE/C++';
import Java from './components/IDE/Java';
import Python from './components/IDE/Python';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {

  const [state,setState] = useState(false);
   
  
    return (
    
   <div className="app">
   <Topbar setState={setState} state={state} />
   <Menu setState={setState} state={state} />
   
    <div className="sections">
    <Router>
    <Routes>
          <Route path="/" element={[
                <Intro/>,
                <About/>,
                <Resources/>,
                <Events/>,
                <Committee/>,
                <Contact/>,
                ]}
          />
              <Route path="/about" element={<About/>} />
              <Route path="/resources" element={<Resources/>} />
              <Route path="/events" element={<EventsAll/>} />
              <Route path="/committee" element={<Committee/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/IDE" element={<IDECards/>} />
              <Route path="/c++" element={<Cplusplus/>} />
              <Route path="/java" element={<Java/>} />
              <Route path="/python" element={<Python/>} />
    </Routes>
    </Router>
    </div>
    </div>
  
    );
  }
  
  export default App;
  