import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { authenticationMiddleware } from './middleware/authMiddleware';

//import promiseMiddleware from './middleware/promisMiddleware';

const initialState = {
  login: { isAuth: false, Name: 'Anon' },
};

//Применяем мидлвээа
//let createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
//const store = createStoreWithMiddleware(reducer, initialState);

let store = createStore(rootReducer, applyMiddleware(authenticationMiddleware, thunkMiddleware));

/*
function fetchPosts() {
  return fetch('https://api.github.com/repos/hadley/ggplot2/issues')
    .then(response => response.json())
    .then(json => {
      let TEST = store.dispatch({
          type: 'TEST',
          json,
        });
      console.log(TEST);
    });
}

fetchPosts();
*/

export default store;
