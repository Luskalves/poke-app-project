import React, { useState, useEffect } from 'react';
import findPokemonApi from './api/findPokemonApi';

function SearchPage () {
  const [selectedPokemon, setSelectedPokemon] = useState()

  const findByName = async ({ target }) => {
    const teste = await findPokemonApi(target.value)
    setSelectedPokemon(teste);
  }
    // useEffect((
    //   console.log('foi')
    // ), [])

  return (
    <div>
      {console.log(selectedPokemon)}
      <h1> POKE LUSKA </h1>
      <input
        type="text"
        onChange={ findByName }
        placeholder="procure um pokemon"
      />
    </div>
  );
}

export default SearchPage;
