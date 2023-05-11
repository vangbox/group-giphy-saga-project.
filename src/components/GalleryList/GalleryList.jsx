import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import GalleryItem from './GalleryItem/GalleryItem.jsx';

function GalleryList() {

    useEffect(() => {
        getGifs();
    }, []);

    // for Saga:
    const getGifs = () => {
        dispatchEvent({
            type: 'GET_GALLERY'
        })
    }

    return (
        <div>
            <h1>Gallery List:</h1>

            {
                gifList.map((gif) => {
                    return (
                        <GalleryItem />
                    )
                })
            }

        </div>
    )
}

export default GalleryList;