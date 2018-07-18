import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'redux-modules'

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(thunk))
  return store
}
