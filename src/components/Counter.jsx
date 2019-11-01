import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  color: orange;
  font-size: 12px;
`

export function Counter({
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
        </p>
      </Fragment>
    )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
