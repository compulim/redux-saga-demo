const SET_CLOCK = 'SET_CLOCK';

export { SET_CLOCK }

export default function (now) {
  return {
    type: SET_CLOCK,
    payload: { now }
  };
}
