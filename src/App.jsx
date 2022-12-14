import react, { useState } from 'react';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Menu from './components/menu/menu';

import Events from './components/events/events.jsx';


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
   <Router>
   <Topbar setState={setState} state={state} />
   <Menu setState={setState} state={state} />
   
    <div className="sections">
    
    <Routes>
      <Route path="/Nexxplora" element={[ <Intro/>,<Events/>]}/>
    </Routes>
  
   
    
    
    </div>
    </Router>
    </div>
  
    );
  }
  
  export default App;
  