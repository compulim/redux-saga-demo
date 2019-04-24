import { ADD_ITEM } from '../action/addItem';

export default function (state = [], { payload, type }) {
  switch (type) {
    case ADD_ITEM:
      state = [...state, { text: payload.text }];
      break;

    default:
      break;
  }

  return state;
}
