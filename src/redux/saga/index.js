import { call, put } from 'redux-saga/effects';

import setClock from '../action/setClock';

function* sleep(ms = 1000) {
  yield call(() => new Promise(resolve => setTimeout(resolve, ms)));
}

export default function* root() {
  for (;;) {
    yield sleep(500);
    yield put(setClock(Date.now()));

    if ((~~(Date.now() / 1000)) % 5 === 0) {
      throw new Error('artificial');
    }
  }
}
