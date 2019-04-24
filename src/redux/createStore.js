import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer/index';
import saga from './saga/index';

export default () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: (err, { sagaStack }) => {
      console.log(err);
      console.log(sagaStack);
    }
  });

  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(saga);

  return store;
}
