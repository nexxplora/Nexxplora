import React from "react";
import Events from "../events/events";
import './intro.scss';


export default function Intro(){

    return (
      
        <div className="intro" id="intro">
        <h1 id="head">Nexxplora 2022</h1>
          <div className="inner-container">
            <div className="img"><img src="images/poster.png"></img></div>
            <div className="stmnts">
            <span className="item">
           " Nexplora is an Engineer's day event organized by department of CSE/IT.
            It is celebrated to commemorate the great achievements of Sir Mokshagundam Visvesvaraya on his birth anniversary.
            It is also celebrated to encourage and appreciate the innovative contributions of all the engineers in the country."
            </span>
            <span className="item">
            "We warmly WELCOME you all in the Nexplora 2k22 on the behalf of entire CSE/IT department and we appreciate your participation & Interest in Nexplora 2k22."
            </span>
          </div>
          </div>
          <div class="quotes">
        <blockquote class="rahul">
            Dear Students; Participation is the key to success so do participation and be the face of your field|
            All The Best!
            <span id="name">Rahul Gupta(Head IT)</span>
        </blockquote>
    
        <blockquote class="sambhav">
           Every Student have the ability to shine and it's never too late for anything so take your first step from here!
           Do participate, and remember results are the fruit of practice so just give your best!
           All The Very Best:)
            <span id="name">Sambhav Agarwal(Deputy Head CS)</span>
        </blockquote>
    </div>
          
        </div>
    );

}
