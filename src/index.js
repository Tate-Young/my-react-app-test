import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import Counter from './container'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
// import { AppContainer } from 'react-hot-loader';

// const store = createStore(reducer)
const store = compose()(createStore)(reducer)
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

myRender(Counter)
// if (module.hot) module.hot.accept('./container', () => myRender(Counter));

registerServiceWorker()
// myRender()
// store.subscribe(myRender)


