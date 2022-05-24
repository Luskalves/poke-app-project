import { React, useState } from 'react';
import pokeContext from './pokeContext';

function Provider ({ children }) {
  const [luska] = useState('luska')
  const pokeState = { luska }
  return (
    <pokeContext.Provider value={ pokeState }>
      {children}
    </pokeContext.Provider>
  )
}

export default Provider;