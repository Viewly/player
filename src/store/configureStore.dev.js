import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from 'redux-modules'

const logger = createLogger({
  timestamp: false,
  collapsed: true,
})

const enhancer = compose(applyMiddleware(thunk, logger))

export default function configureStore() {
  const store = createStore(reducers, enhancer)

  if (module.hot) {
    module.hot.accept('../redux-modules', () => store.replaceReducer(reducers))
  }

  return store
}
