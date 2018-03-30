import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import PugsList from './pugs'

ReactDOM.render(
  <Provider store={store}>
    <PugsList />
  </Provider>,
  document.getElementById('app')
)
