import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface NavButtonProps {
    name: string;
}

const NavButton: React.FC<NavButtonProps> = ({ name }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const path = '/' + name.toLowerCase()

    return (
        <button style={{ 
            color: location.pathname.includes(path) ? 'red' : 'inherit',
            textDecoration: location.pathname.includes(path) ? 'underline' : 'inherit'}} 
            onClick={() => navigate(path)}>{name}
        </button>
    )
    
}

export default NavButton
