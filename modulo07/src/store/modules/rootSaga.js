import { all } from 'redux-saga/effects';
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([
    cart,
    // Mesma coisa que o Redux, pode adicionar mais Sagas aqui.
  ]);
}
