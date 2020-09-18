import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export let store = createStore(persistedReducer)
// export let persistor = persistStore(store)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
// }

export function configureStore(preloadedState) {
  const composedEnhancer = composeWithDevTools()
  const store = createStore(persistedReducer, preloadedState, composedEnhancer)

  return store
}

export function configurePersistor(store) {
  const persistor = persistStore(store)

  return persistor
}
