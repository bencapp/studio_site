import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

const images = require.context('./assets/works', true, /\.(jpg|jpeg|png|webp)$/i)

export const getAllImages = () => {
    const keys = images.keys();  // Get all keys (paths)

    const imageMap = {}
    for (const key of keys) {
        const title = key.split('/')[3].replace(/\.(jpg|jpeg|png|webp)$/i, "")
        const year = key.split('/')[1]
        const path = images(key)
        if (imageMap[year]) {
            imageMap[year][title] = path
        } else {
            imageMap[year] = {
                [title]: path
            }
        }
    }

    return imageMap
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
