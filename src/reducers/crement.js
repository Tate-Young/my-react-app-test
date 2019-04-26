import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce'
import Types from '../types'
import { fromJS } from 'immutable'

export const INITIAL_STATE = fromJS({ 
  myVal : 0
})

// export const increment = (state = INITIAL_STATE, action) => Object.assign({}, state, { myVal: ++state.myVal });

// export const increment = (state = INITIAL_STATE, action) => ({ ...state, 'myVal': ++state.myVal })

// export const decrement = (state = INITIAL_STATE, action) => Object.assign({}, state, { myVal: --state.myVal });

export const increment = (state = INITIAL_STATE, action) => state.set('myVal', state.get('myVal') + 1)
export const decrement = (state = INITIAL_STATE, action) => state.set('myVal', state.get('myVal') - 1)

export const HANDLERS = {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [ReduxSauceTypes.DEFAULT]: (state = INITIAL_STATE) => state,
}

export default createReducer(INITIAL_STATE, HANDLERS)