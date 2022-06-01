import React, { useContext } from 'react'
import Header from './Header';
import pokeContext from '../context/pokeContext';

function Favourites () {
  const {
    favouritesPkm
  } = useContext(pokeContext);

  const renderFavourites = () => {
    return favouritesPkm.map((poke) => (
      <div>
        <img src={ poke.sprites.front_default } alt={ poke.species.name } />
        <p>{ poke.species.name }</p>
      </div>
    ))
  }

  return (
    <div>
      <header className="header">
        <h1> POKE LUSKA </h1>
        <Header />
      </header>
      <h1>Pokemons Favoritos</h1>

      {favouritesPkm.length >= 1 ? renderFavourites() :
        'Não existem pokemons favoritos'}
    </div>
  )
}

export default Favourites;