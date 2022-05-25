import React, { useState, useEffect } from 'react';
import findPokemonApi from './api/findPokemonApi';

function SearchPage () {
  const [pokeImage, setPokeImage] = useState()

  const findByName = async ({ target }) => {
    const response = await findPokemonApi(target.value)
    if (response) {
      setPokeImage(response.sprites.front_default);
    }
  };

  const randomInitial = async () => {
    const iniciais = ["bulbasaur", "squirtle", "charmander"]
    const escolhido = Math.floor(Math.random() * 3);
    const resultado = await findPokemonApi(iniciais[escolhido])
    setPokeImage(resultado.sprites.front_default);
  }

  useEffect(() => {
    randomInitial();
  }, [])

  return (
    <div>
      <h1> POKE LUSKA </h1>
      <input
        type="text"
        onChange={ findByName }
        placeholder="procure um pokemon"
      />
      <img src={ pokeImage } alt="foto do pokemon" />
    </div>
  );
}

export default SearchPage;
