import axios from 'axios';

///Podemos usar axios como el fetch. 
//Creamos una instancia de Axios y podemos setearle varias cosas para no andar repitiendo codigo
//Tenemos una ventaja que no tenemos que hacer la serializacion de la resp a json
export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});