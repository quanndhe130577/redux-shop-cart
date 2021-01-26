import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
import { createStore } from 'redux';

import reducer from './reducer';
import { Provider } from 'react-redux'


//store
const store = createStore(
  reducer,
  // add this code to use Redux dev extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//store.dispatch({type: DECREASE});
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
