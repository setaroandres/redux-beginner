//El store lo vamos a manejra como fuente de la verdad de los estados
//Todo estado / informacion que deba ser consumida a traves de los diferentes componentes se va a hacer desde aca
//Desp de crear al store debemos proveerlos a toda la app / React, para eso usamos react-redux en el main.jsx

import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon/'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,//reducer de counterSlice
    pokemons: pokemonSlice.reducer,//reducer de pokemonSlice

    //Esto lo hacemos para poder instanciar el reducer usando RTK
    [todosApi.reducerPath]: todosApi.reducer
  },//Debemos colocar los reducers de los slides aca para poder utilizarlos
  //Este middleware lo usamos para RTK
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware)
})