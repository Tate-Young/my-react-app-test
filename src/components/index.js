import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { hot } from 'react-hot-loader';

function Counter({
  counter, increment, decrement
}) {
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
        <Button variant="contained" color="primary">
          Hello Tate & Snow
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