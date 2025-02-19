import React from "react"

const CV: React.FC = () => {
    return (
        <div className="cv">            
            <section>
                <h2 style={{ marginBottom: '0' }}>Education</h2>
                <p><strong>Carleton College, Northfield, MN</strong> <em>Class of 2020</em></p>
                <p>Bachelor’s in Theater Arts</p>
            </section>

            <section>
                <h2>Projects as a Leading Artist</h2>
                <h3>WINTERCONNECTION; Facilitator <em>January 2020-Present</em></h3>
                <ul>
                    <li>Ongoing series of facilitated meal experiences using play and ceremony to cultivate community</li>
                </ul>
                <h3>EXCAVATION I; Facilitator/Producer <em>October 2024</em></h3>
                <ul>
                    <li>Long-form ritual retreat designed to uncover, examine, and discover</li>
                </ul>
                <h3>VIRGINIA EXPERIMENT IV; Facilitator/Producer <em>June 2024</em></h3>
                <ul>
                    <li>Intensive paratheatrical experience designed for new participants</li>
                </ul>
                <h3>GHOST; Director <em>Winter 2023-2024</em></h3>
                <ul>
                    <li>Devised theater performance incorporating storytelling, movement, live music, and puppetry</li>
                    <li>Performed at the Northfield Arts Guild, January 2024; Bryant Lake Bowl, March 2024</li>
                </ul>
                <h3>PLATO’S SYMPOSIUM; Collaborator <em>November 2023-Present</em></h3>
                <ul>
                    <li>Ongoing paratheatrical performance project about discourse, class dynamics, and intoxication</li>
                    <li>Residency in January 2024 at Stove Works in Chattanooga, TN</li>
                </ul>
            </section>

            <section>
                <h2>Workshops/Other Arts Experience</h2>
                <h3>EXTRAVAGANZA I; Participant <em>July 2023</em></h3>
                <h3>HIGHPOINT CENTER FOR PRINTMAKING; Studio Intern <em>September 2022 - December 2022</em></h3>
                <ul>
                    <li>Assisted in fine art production for print publisher Highpoint Editions</li>
                </ul>
            </section>

            <section>
                <h2>Exhibitions</h2>
                <h3>HIGHPOINT PRINTMAKING SEMI-ANNUAL CO-OP EXHIBITION</h3>
                <ul>
                    <li>2020, 2022, 2023, 2024</li>
                </ul>
            </section>
        </div>
    )
}

export default CV

