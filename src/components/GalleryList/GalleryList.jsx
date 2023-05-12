import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GalleryItem from './GalleryItem/GalleryItem.jsx';

function GalleryList() {
    const dispatch = useDispatch();
    const gallery = useSelector(store => store.gallery)

    useEffect(() => {
        getGallery();
    }, []);

    // for Saga:
    const getGallery = () => {
        dispatch({
            type: 'GET_GALLERY',
            payload: 'cheeseburger'
        })
    }

    // console.log('THIS IS THE GALLERY', gallery);

    return (
        <div>
            <h1>Gallery List:</h1>

            {
                gallery.map((gif) => {
                    return (
                        <GalleryItem 
                            gif={gif}
                        />
                    )
                })
            }

        </div>
    )
}

export default GalleryList;