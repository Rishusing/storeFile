import React from 'react'
import './About.css'
import DP from './OwnDP.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'


const About = () => {
    return (
        <div className="aboutMain">
            <div className="child">
                <div className="childleft">
                    <img src={DP} width="320px" alt="Profile" />
                </div>
                <div className="childright">
                    <div className="content">
                        <h1>Rishu Singh</h1>
                        <p>I am currently pursuing my Bachelors in Information Technology Engineering from Institute of Engineering and Technology.I am an enthusiast Sport Programmer and Web developer with knowledge of technology like HTML, CSS, JavaScript, React.js, Node.js, firebase, MongoDB, Express.js etc.</p>
                        <h3>Fullstack Developer and Sport Programmer</h3>
                        <div className="socialAbout">
                            
                            <a href='https://github.com/Rishusing' target="_blank" rel="noreferrer"><FaGithubSquare/> Github</a >
                            <a href='https://www.linkedin.com/in/rishu-profile/' target="_blank" rel="noreferrer"><BsLinkedin/>  LinkedIn</a >
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About