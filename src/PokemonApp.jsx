import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {pokemons = [], page, isLoading} = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  //Para hacer que algo se ejecute solo una vez cuando se carga el componente usamos el useEffect
  useEffect(() => {
    //Aca queremos disparar el thunk, ya que necesitamos que sea async. Las acciones sync se van a resolver dentro del thunk
    dispatch(getPokemons(0));
  }, [])
  
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {
          pokemons.map(({name}) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
        >
        Next
      </button>
      
    </>
  )
}
