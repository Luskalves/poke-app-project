export default async function findPokemonApi(nameOrId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    const data = await response.json();
    return data;
  } catch (err) {
    return undefined;
  }
}