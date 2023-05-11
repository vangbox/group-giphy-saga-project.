import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SAGA/SEARCH_GIFS',
      payload: 'cheesburger'
    })
  }, [])

  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
