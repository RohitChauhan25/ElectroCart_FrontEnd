import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import headerSlice from './slice/herder'
import loaderReducer from './slice/loader'
import cartSlice from './slice/cartSlice'
import userSlice from './slice/userSlice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loaderReducer', 'CartReducer'],
}

const reducer = combineReducers({
  headerReducer: headerSlice,
  loaderReducer,
  CartReducer: cartSlice,
  UserReducer: userSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
