import React from "react";
import bioPic from '../images/bio.jpg'

function About() {
    return (
        <div className="container">
            <center>
                <img src={bioPic} alt="Me"></img>
                <h3>Hello, and welcome to my webpage!</h3>
                <p>My name is Christian Tielking! And I have been studying Web Development
                    off and on for the past 3 years, but recently I mad a larger commitment 
                    into the learning of Web Development. I decided to go to and graduate from
                    a bootcamp focusing on Full Stack Web Development provided by Butler University.
                    So please, look at my projects tab to see all the projects I completed while in
                    the bootcamp. Or you can reach out to me with any questions you have on the Contact Me
                    tab!
                </p>
            </center>
        </div>
    )
}

export default About;