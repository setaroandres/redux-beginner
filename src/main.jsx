import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { TodoApp } from './TodoApp.jsx'
import './index.css'
import { store } from './store'

//Desp de crear al store debemos proveerlos a toda la app / React, para eso usamos react-redux aca
//Debemos crearnos el proveedor para proveer el store a toda la app
//El provider recibe un store, que es el store que nosotros creamos para manejar todos los estados
//Hay que pasarle un reducer al store, sino no va a funcionar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
