import React from "react"
import NavButton from "./NavButton.tsx"

const Nav: React.FC = () => {
    return (
        <div className="nav-bar">
            <div className="image-name">
                <img
                    className="kettle"
                    src={"/works/2020/kettle/kettle_close.jpg"}
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
