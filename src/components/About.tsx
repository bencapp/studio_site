import React from "react"

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="headshot-container">
                <img className="headshot" src="/images/portrait.png" alt="headshot"></img>
            </div>
            <p>
                Hello! I am Ben Capp, a Philadelphia-based theater director, performance artist, and printmaker. 
                I am interested in how improvisational movement and participatory action can cultivate creativity and allow us to 
                imagine new possibilities for how we might live. I like to explore new techniques in printmaking, and I facilitate paratheatrical retreats
                and workshops.
            </p>
            <p>
                This site serves primarily as a record of my print and other visual arts. For more about my performance work, check out the <a href={'https://experiencecult.com'} target="_blank" rel="noreferrer">Experience Cult Research Group</a> and <a href={'https://virginiatwins.com/'} target="_blank" rel="noreferrer">Virginia Twins Performance Collective</a> websites.
            </p>
        </div>
    )
}

export default About
