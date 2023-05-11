import { useState } from 'react';

function GalleryItem() {

    const [isFavorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorite(false)
        } else {
            setFavorite(true)
        }
    }

    return (
        <div>
            <h1>Gif here</h1>
            <button onClick={toggleFavorite}>FAVE</button>
        </div>
    )
}

export default GalleryItem;