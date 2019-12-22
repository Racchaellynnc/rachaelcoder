import { createStore, applyMiddleware } from 'redux';

const middlewares = [];

export const store = createStore( applyMiddleware(...middlewares));

export default store;