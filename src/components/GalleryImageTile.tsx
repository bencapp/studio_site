import React, { useContext, useState } from "react"
import { ImagesContext } from "../App.tsx";

interface GalleryImageTileProps {
    year: string
    work: string
}

const GalleryImageTile: React.FC<GalleryImageTileProps> = ({ year, work }) => {
    const { images, setOverlay } = useContext(ImagesContext)

    if (!images) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
      setLoaded(true); // Once image is loaded, set loaded to true
    };

    return (
        <div>
            <div className="image-container">
                {images && images[year] && images[year][work] ? (
                    <img 
                        src={images[year][work]}
                        alt={work}
                        className={`work-primary-image ${loaded ? 'fade-in' : ''}`} // Add fade-in class once loaded
                        onLoad={handleImageLoad} // Event handler when image finishes loading
                        onClick={() => setOverlay({ year: year, work: work })}
                    ></img>
                ) : (
                    <p>image not found for {year} – {work} </p>
                )}
            </div>
            <figcaption className={`caption ${loaded ? 'fade-in' : ''}`}>{work.replace(/_/g, " ")}</figcaption>
        </div>
    )
}

export default GalleryImageTile