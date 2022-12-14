import { createSlice } from "@reduxjs/toolkit";

const setClassNameSlice = createSlice({
   name: 'setClassName',
   initialState: {
      active:false
   },

   reducers: { 
      addFlag(state) {
         state.active = true 
      },
      
      removeFlag(state) {
         state.active = false
      }
   }
})

export const { addFlag,removeFlag } = setClassNameSlice.actions
export default setClassNameSlice.reducer