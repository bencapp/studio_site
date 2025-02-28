import React from "react"
import GalleryWorkTile from "./GalleryImageTile.tsx"
import { GalleryMap } from "./Gallery.tsx"

interface GalleryYearProps {
    year: string
}

const GalleryYear: React.FC<GalleryYearProps> = ({ year }) => {
    return (
            <div className="gallery-year-container">
            {GalleryMap[year].map((work) => (
                <GalleryWorkTile key={work} year={year} work={work} />
            ))}
        </div>
    )
}

export default GalleryYear
