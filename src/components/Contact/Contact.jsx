import React from "react";
import "./Contact.scss";
import {AiFillLinkedin,AiFillInstagram,AiOutlineMail} from 'react-icons/ai';
import Lottie from "react-lottie";
import animationData from '../lottie/email.json';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}   


function Contact(){
  let { height, width } = useWindowDimensions();
  let lottie_w=400,lottie_h=400;
  if(width<768){
    lottie_h=200;
    lottie_w=350;
  }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div className="contact" id="contact">
        <div className="sectionhead"><h1>Get in Touch</h1></div>
        <div className="content">

        <div className="lottie">
        <Lottie 
	    options={defaultOptions}
        height={lottie_h}
        width={lottie_h}
        className="anim"
      />
        </div>
        <div className="form-container">
            <form className="form"   
            action="https://formspree.io/f/mwkyebqq"
            method="POST">
                <input type="email"
                placeholder="Your Email"
                name="_replyto"
                className="input-box email-box"
                autoComplete="off"></input>

                <textarea
                 placeholder="Send us a message."
                 name="message"
                type="text"
                className="input-box emailbody-box"></textarea>
              <button type="submit" className="submit-btn">Send</button>
            </form>
            <div className="icon-container">
        <a href="https://www.linkedin.com/company/the-ciphers/"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/_the_ciphers/"><AiFillInstagram/></a>
        <a href="mailto:srcodingclub@gmail.com"><AiOutlineMail/></a>
        </div>
        </div>
       

        </div>
        
        <p className="copyright">© Ciphers | 2021</p>
        <p className="credits">Made with <span id="pulsingheart">💓</span> by <a href="https://harshdubey11.github.io/Portfolio">Harsh.</a></p>
        </div>
    );
}

export default Contact;