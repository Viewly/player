/* eslint-disable import/no-extraneous-dependencies, global-require */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import { App } from './containers'
import configureStore from './store/configureStore'
import './scss/master.scss'

const rootEl = document.getElementById('root')
const store = configureStore()

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app').default

    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl,
    )
  })
}
