const ADD_ITEM = 'ADD_ITEM';

export { ADD_ITEM }

export default function addItem(text) {
  return {
    type: ADD_ITEM,
    payload: { text }
  };
}
