import React from "react"
import "./App.css"
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Nav from "./components/Nav.tsx"
import About from "./components/About.tsx"
import Gallery from "./components/Gallery.tsx"
import CV from "./components/CV.tsx"
import GalleryYear from "./components/GalleryYear.tsx"

export const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024']

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/gallery" element={<Gallery />} >
                    <Route index element={<Navigate to="2024" replace />} />

                    {years.map((year) => (
                        <Route key={year} path={year} element={<GalleryYear year={year}/>}/>
                    ))}
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/cv" element={<CV />} />
            </Routes>
        </Router>
    )
}

export default App
