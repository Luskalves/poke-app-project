import { React, useState } from 'react';
import pokeContext from './pokeContext';

function Provider ({ children }) {
  const [favouritesPkm, setFavouritesPkm] = useState([]);

  const pokeState = { 
    favouritesPkm,
    setFavouritesPkm
  };
  
  return (
    <pokeContext.Provider value={ pokeState }>
      {children}
    </pokeContext.Provider>
  )
}

export default Provider;