import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1 //Aca cambiamos el state
    },
    decrement: (state, action) => {
      //console.log({action})
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {//la action tiene la accion en si, en este caso incrementByAmount y el payload, en este caso es lo que le pasamos como parametro cuando la ejecutamos (2)
      //console.log({state, action})
      state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
