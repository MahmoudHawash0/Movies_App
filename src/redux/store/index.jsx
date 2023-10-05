import { createStore , applyMiddleware} from 'redux';
import { moviesReducer } from '../reducer/moviereducer';
import thunk from 'redux-thunk'

// 1- create store
export const store = createStore(moviesReducer,applyMiddleware(thunk));