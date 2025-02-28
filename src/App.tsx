import React, { createContext, useEffect, useState } from "react"
import "./App.css"
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Nav from "./components/Nav.tsx"
import About from "./components/About.tsx"
import Gallery, { GalleryMap } from "./components/Gallery.tsx"
import CV from "./components/CV.tsx"
import GalleryYear from "./components/GalleryYear.tsx"
import { getAllImages } from "./index.js"

interface ImagesContextType {
    images: {};
    setImages: {};
    overlay: { year: string, work: string };
    setOverlay: React.Dispatch<{ year: string, work: string }>;
}
  
export const ImagesContext = createContext<ImagesContextType>({
    images: {},
    setImages: () => { throw new Error('setImages() called outside of context')},
    overlay: { year: '', work: '' },
    setOverlay: () => { throw new Error('setOverlay() called outside of context')}
})

const App: React.FC = () => {
    const [images, setImages] = useState<{}>({})
    const [overlay, setOverlay] = useState<{ year: string, work: string }>({ year: '', work: '' })


    useEffect(() => {
        const imageMap = getAllImages()
        setImages(imageMap);
    }, [])

    return (
        <ImagesContext.Provider value={{ images, setImages, overlay, setOverlay }}>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Navigate to="/about" replace />} />
                    <Route path="/gallery" element={<Gallery />} >
                        <Route index element={<Navigate to="2024" replace />} />
                        {Object.keys(GalleryMap).reverse().map((year) => (
                            <Route key={year} path={year} element={<GalleryYear year={year} />} />
                        ))}
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
            </Router>
        </ImagesContext.Provider >
    )
}

export default App
