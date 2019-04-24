import React, { useState } from 'react';
import { connect } from 'react-redux';
import addItem from './redux/action/addItem';

function App({ onAddItem, items, now }) {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={ event => {
        event.preventDefault();

        const trimmedText = text.trim();

        if (trimmedText) {
          onAddItem(text);
          setText('');
        }
      } }
    >
      <div>{ new Date(now).toString() }</div>
      <ul>
        {
          items.map(({ text }) =>
            <li>{ text }</li>
          )
        }
      </ul>
      <input
        autoFocus={ true }
        onChange={ ({ target: { value } }) => setText(value) }
        value={ text }
      />
      <button
        type="button"
      >
        Add
      </button>
    </form>
  );
}

export default connect(
  ({
    clock: { now },
    items
  }) => ({
    items,
    now
  }),
  dispatch => ({
    onAddItem: text => dispatch(addItem(text))
  })
)(App)
