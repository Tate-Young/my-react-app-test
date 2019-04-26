import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
// import Counter from './container'
import App from './App'
import { createStore, compose, applyMiddleware } from 'redux' // eslint-disable-line
import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'


const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  middlewares.push(createLogger({
    level: 'log',
    timestamp: true,
    collapsed: true,
    stateTransformer: (state) => {
      if (state.toJS) return state.toJS()
      const entries = Object.entries(state)
      return entries.reduce((obj, entry) => {
        entry[1].toJS ? (obj[entry[0]] = entry[1].toJS()) : (obj[entry[0]] = entry[1]) // eslint-disable-line
        return obj
      }, {})
    },
  }))
}

// const store = createStore(reducer)
// const store = compose()(createStore)(reducer)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = composeEnhancers(
//   applyMiddleware(...middlewares)
// )(createStore)(reducer)
const store = composeWithDevTools(
  applyMiddleware(...middlewares)
)(createStore)(reducer)

const rootEl = document.getElementById('root')

// const myRender = Component => {
//   render(
//     <Provider store={store}>
//       <AppContainer>
//         <Component />
//       </AppContainer>
//     </Provider>,
//     rootEl
//   );
// }
const myRender = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  );
}

myRender(App)
// if (module.hot) module.hot.accept('./container', () => myRender(Counter));

registerServiceWorker()
// myRender()
// store.subscribe(myRender)


