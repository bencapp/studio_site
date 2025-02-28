import React, { useContext, useEffect, useState } from "react"
import { ImagesContext } from "../App.tsx"

interface GalleryOverlayProps {
    year: string
    work: string
}

const GalleryOverlay: React.FC<GalleryOverlayProps> = ({ year, work }) => {
    const { images, setOverlay } = useContext(ImagesContext)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    console.log({ images })

    const workImages = Object.values(images[year]).filter((_, key) =>
        Object.keys(images[year])[key].startsWith(work)
    ) as string[]

    console.log({ workImages })
    const handleClickOut = (event) => {
        if (event.target === event.currentTarget) {
            setOverlay({ year: '', work: '' })
        }
    }

    const handleForward = () => {
        if (currentImageIndex + 1 < workImages.length) {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const handleBack = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "scroll"
        }
    }, [])

    return (
        <>
            <div className="gallery-overlay" ></div>
            {images && images[year] && images[year][work] ? (
                <div className='focused-image-container' onClick={(e) => handleClickOut(e)}>
                    <div className='focused-image-row' onClick={(e) => handleClickOut(e)}>
                        <div className='back' onClick={handleBack}>&lt;</div>
                        <img
                            src={workImages[currentImageIndex]}
                            className='focused-image'
                            alt={work}
                        ></img>
                        <div className="forward" onClick={handleForward}>&gt;</div>
                    </div>
                    <figcaption className={`caption`}>{work.replace(/_/g, " ")}</figcaption>
                    <div className='preview-row' onClick={(e) => handleClickOut(e)}>
                        {workImages.map((source, i) => 
                            <img 
                                className={`image-preview ${currentImageIndex === i ? 'selected' : ''}`} 
                                src={source} 
                                key={i} 
                                alt={source}
                                onClick={() => setCurrentImageIndex(i)}
                            ></img>
                        )}
                    </div>
                    <div className="close" onClick={() => setOverlay({ year: '', work: '' })}>x</div>
                </div>
            ) : (
                <p>image not found for {year} – {work} </p>
            )}
        </>
    )
}

export default GalleryOverlay
