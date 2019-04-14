import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { hot } from 'react-hot-loader';

function Counter({
  counter, increment, decrement
}) {
    const [name, setName] = useState('hello')

    return (
      <p>
        Holy shit Clicked: {counter} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        <Button variant="contained" color="primary" onClick={() => setName('world')}>
          {name}
        </Button>
      </p>
    )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default hot(module)(Counter)