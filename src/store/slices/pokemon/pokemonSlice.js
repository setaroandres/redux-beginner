import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  //este va a ser el state que luego vamos a manejar a traves de toda la app
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {//aca podemos recibir el action, que va a contener el payload
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log({action});
      state.isLoading = false,
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});

//Thunk: es una accion async que dispara otra accion cuando la accion async se resuelve.
//En este caso el Thunk, una vez que se ejecute y termine la accion async de traer los pokemons de la API va a ejecutar startLoadingPokemons y setPokemons
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;