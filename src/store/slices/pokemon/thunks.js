//Thunk: es una accion async que dispara otra accion cuando la accion async se resuelve.
//En este caso el Thunk, una vez que se ejecute y termine la accion async de traer los pokemons de la API va a ejecutar startLoadingPokemons y setPokemons

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async(dispatch, getState) => {//esta fcn se manda a llamar con un dispatch, que va a hacer el dispatch de otra accion. El getState lo podemos llamar para obtener todo el rootState
    dispatch(startLoadingPokemons());

    // realizar peticion http
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`) //el offset es lo que me salteo al llamarlos
    // const data = await resp.json();
    // console.log({data}) 

    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    
    //Luego hacemos el dispatch de la carga de pokemones. Nosotro le creamos el payload a nuestra conveniencia y se lo pasamos como param
    dispatch(setPokemons({page: page + 1, pokemons: data.results}))
  }
}