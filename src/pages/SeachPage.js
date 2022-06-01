import React, { useState, useEffect, useContext } from 'react';
import findPokemonApi from './api/findPokemonApi';
import '../App.css'
import Header from './Header';
import pokeContext from '../context/pokeContext';

function SearchPage () {
  const {
    favouritesPkm,
    setFavouritesPkm
  } = useContext(pokeContext);
  
  const [pokeImage, setPokeImage] = useState()
  const [pokeName, setPokeName] = useState('')

  const findByName = async ({ target }) => {
    const response = await findPokemonApi(target.value)
    if (response) {
      setPokeName(response.species.name)
      setPokeImage(response.sprites.front_default);
    }
  };

  const randomInitial = async () => {
    const iniciais = ["bulbasaur", "squirtle", "charmander"]
    const escolhido = Math.floor(Math.random() * 3);
    const resultado = await findPokemonApi(iniciais[escolhido])
    
    setPokeImage(resultado.sprites.front_default);
    setPokeName(resultado.species.name)
  }

  const addFavouritePkm = async () => {
    const newFavourite = await findPokemonApi(pokeName)
    setFavouritesPkm([...favouritesPkm, newFavourite])
    console.log('lista deles:', favouritesPkm)
  }

  useEffect(() => {
    randomInitial();
  }, [])

  return (
    <div className="searchbar">
      <header className="header">
        <h1> POKE LUSKA </h1>
        <Header />
      </header>
      
      <section>
        <input
          type="text"
          onChange={ findByName }
          placeholder="procure um pokemon"
        />
        <img src={ pokeImage } alt="foto do pokemon" />
        <span> {pokeName} </span>
      </section>
      
      <button
        data-testid="favourite-button"
        onClick={ () => addFavouritePkm() }
      >
        Favoritar
      </button>
    </div>
  );
}

export default SearchPage;
