import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import reactLogo from './assets/react.svg';
import { decrement, increment, incrementByAmount } from './store/slices/counter';
import viteLogo from '/vite.svg';

function App() {

  //useSelector - Hook para seleccionar algo de nuestro store
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={ () => dispatch(increment())}>
          Increment
        </button>
        <button onClick={ () => dispatch(decrement())}>
          Decrement
        </button>
        {/* Aca le podemos pasar parametros, que en el slice ve a ser recibido como un payload dentro de la accion */}
        <button onClick={ () => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
