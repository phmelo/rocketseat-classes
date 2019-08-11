import { createStore } from 'redux';
// import reducer from './modules/cart/reducer';
import rootReducer from './modules/rootReducer';

// const store = createStore(reducer);
const store = createStore(rootReducer);

export default store;
