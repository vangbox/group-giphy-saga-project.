import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App(props) {
  const dispatch = useDispatch();
  const gallery = useSelector(store => store.gallery)
  useEffect(() => {
    dispatch({
      type: 'SAGA/SEARCH_GIFS',
      payload: 'cheesburger'
    })
  }, [])
  console.log("Here's our gallery!:", gallery);
  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
