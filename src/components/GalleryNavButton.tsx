import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface GalleryNavButtonProps {
    year: string;
}

const GalleryNavButton: React.FC<GalleryNavButtonProps> = ({ year }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const isYear = location.pathname.endsWith(year)

    return (
        <button style={{ 
            color: isYear ? 'red' : 'inherit',
            textDecoration: isYear ? 'underline' : 'inherit'}} 
            onClick={() => navigate(`/gallery/${year}`)}>{year}
        </button>
    )
    
}

export default GalleryNavButton
