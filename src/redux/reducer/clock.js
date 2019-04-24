import { SET_CLOCK } from '../action/setClock';

export default function (state = { now: Date.now() }, { payload, type }) {
  switch (type) {
    case SET_CLOCK:
      state = { ...state, now: payload.now };
      break;

    default:
      break;
  }

  return state;
}
