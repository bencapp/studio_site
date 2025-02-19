import React, { useEffect, useState } from "react"
import GalleryWorkTile from "./GalleryWorkTile.tsx"
import { GalleryMap } from "./Gallery.tsx"

interface GalleryYearProps {
    year: string
}

const GalleryYear: React.FC<GalleryYearProps> = ({ year }) => {
    return (
        <div className="gallery-year-container">
            {GalleryMap[year].map((work) => (
                <GalleryWorkTile key={work} imagePath={`/works/${year}/${work}/${work}.jpg`} work={work} />
            ))}
        </div>
    )
}

export default GalleryYear
