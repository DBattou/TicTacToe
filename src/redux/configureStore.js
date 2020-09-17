import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
