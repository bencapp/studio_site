import React, { useEffect } from "react"
import GalleryNavButton from "./GalleryNavButton.tsx"
import { years } from "../App.tsx"
import GalleryYear from "./GalleryYear.tsx"
import { Outlet } from "react-router-dom"

export const GalleryMap = {
    2018: ['dust', 'holding_you', 'holding_you_bw', 'holding_you_variations'],
    2019: ['oak', 'service_on_verstovia', 'service_on_verstovia_tan'],
    2020: ['birch', 'kettle', 'sculpting'],
    2021: ['asturian_bridge', 'city_trees', 'city_trees_2', 'coats', 'fabric', 'journals', 'landscape', 'lighthouse', 'map_I', 'map_II', 'map_III', 'otis', 'reaching', 'sculpture', 'sculpture_I', 'self_portrait_with_curtain', 'self_portrait_with_flowers', 'the_dance'],
    2022: ['dieffenbachia', 'grass', 'lily', 'shapes', 'vase_with_cloth'],
    2023: ['aguille_du_midi:_chamonix', 'monstera', 'ponytail_palm'],
    2024: ['bleeding_heart', 'dance', 'from_the_dining_room_table', 'home_I', 'home_II', 'home_III', 'lamp_with_flowers']
}

const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            <div className="nav-buttons year-nav">
                {years.map((year) => (
                    <GalleryNavButton key={year} year={year} />
                ))}
            </div>
            <Outlet />

            <div className="contact">
                Please contact me at <a href="mailto:bentucker333@gmail.com">bentucker333@gmail.com</a> to ask about pricing and availability on any prints.
            </div>
        </div>
    )
}

export default Gallery
