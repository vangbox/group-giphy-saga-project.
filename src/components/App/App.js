import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

//imports components
import Layout from '../Layout/Layout';
import GalleryList from '../GalleryList/GalleryList';
import FavoritesPage from '../FavoritesPage/FavoritesPage'

function App(props) {

const dispatch = useDispatch();

const gallery = useSelector(store => store.gallery);

const getGallery = () => {
  dispatch({
    type: 'GET_GALLERY'
  })
}

// function smile(){
//   dispatch({
//     type:'SMILE_PAGE'
//   })
// }
// function laugh(){
//   dispatch({
//     type:'LAUGH_PAGE'
//   })
// }
// function cryingLaugh(){
//   dispatch({
//     type:'CRYING_LAUGH_PAGE'
//   })
// }
// function cry(){
//   dispatch({
//     type:'CRY_PAGE'
//   })
// }
// function angry(){
//   dispatch({
//     type:'ANGRY_PAGE'
//   })
// }

  return (
    <>
      <p>GalleryList</p>
        <GalleryList />
    </>
    // <Router>
    //   <div>

    //     <header>
    //           <input><Link to='/api/category'>Search Bar</Link></input>
    //           <p>Fav's</p> 
    //         <nav>
    //           <button><Link to='/'>❤️‍🔥</Link></button>
    //           <p onClick={smile}>😀</p>
    //           <p onClick={laugh}>😆</p>
    //           <p onClick={cryingLaugh}>😂</p>
    //           <p onClick={cry}>😭</p>
    //           <p onClick={angry}>😡</p>
    //         </nav>
    //     </header>

    //     <div>
    //       <Route exact path ='/' Component={FavoritesPage} />
    //       <Route exact path ='/api/category' Component={GalleryList} />
    //     </div>

    //   </div>
    // </Router>
  );
}

export default App;
