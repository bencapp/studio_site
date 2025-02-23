import React from "react"

interface GalleryWorkTileProps {
    imagePath: string;
    work: string;
}

const GalleryWorkTile: React.FC<GalleryWorkTileProps> = ({ imagePath, work }) => {
    console.log({imagePath})
    return (
        <div>
            <div className="image-container">
                <img className="work-primary-image" src={imagePath} alt={imagePath}></img>
            </div>
            <figcaption className="caption">{work.replace(/_/g, " ")}</figcaption>
        </div>
    )
}

export default GalleryWorkTile