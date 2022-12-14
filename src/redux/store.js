import { configureStore} from "@reduxjs/toolkit";
import { usersApi } from './usersApi'
import setClassNameSlice from './slice/setClassName'

export const store = configureStore({
   reducer: {

      setClassName: setClassNameSlice,
      [usersApi.reducerPath]: usersApi.reducer
   },
   
   middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(usersApi.middleware)
})