import Types from '../types'
import { fromJS } from 'immutable'

export const INITIAL_STATE = fromJS({ 
  myVal : 0
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return state.set('myVal', state.get('myVal') + 1)
    case Types.DECREMENT:
      return state.set('myVal', state.get('myVal') - 1)
    default:
      return state
  }
}