import React, { useContext } from "react"
import NavButton from "./NavButton.tsx"
import { ImagesContext } from "../App.tsx"

const Nav: React.FC = () => {
    const { images } = useContext(ImagesContext)
    
    return (
        <div className="nav-bar">
            <div className="image-name">
                <img
                    className="kettle"
                    src={images && images['2020'] ? images['2020']['kettle_close'] : ''}
                    alt="kettle"
                />
                <div className="name">Ben Capp</div>
            </div>
            <div className="nav-buttons">
                <NavButton name="About"/>
                <NavButton name="Gallery"/>
                <NavButton name="CV"/>
            </div>
        </div>
    )
}

export default Nav
