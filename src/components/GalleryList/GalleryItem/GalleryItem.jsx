import { useState } from 'react';

function GalleryItem(props) {

    const [isFavorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorite(false)
        } else {
            setFavorite(true)
        }
    }
    let gif = props.gif;

    let gif_url = gif.images.original.url;

    return (
        <div>
            <img src={gif_url}></img>
            <button onClick={toggleFavorite}>FAVE</button>
        </div>
    )
}

export default GalleryItem;