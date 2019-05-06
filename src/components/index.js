import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { hot } from 'react-hot-loader';
import styled from 'styled-components'

const Title = styled.h1`
  color: orange;
  font-size: 18px;
`

function Counter({
  counter, increment, decrement
}) {
    return (
      <Fragment>
        <Title>Good morning</Title>
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
      </Fragment>
    )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default hot(module)(Counter)