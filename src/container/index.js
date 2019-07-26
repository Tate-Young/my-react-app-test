import { connect } from "react-redux";
import toJS from '../toJS'
import { Counter } from '../components'
import {increment} from '../actions'
import {decrement} from '../actions'


// const mapStateToProps = state => ({
//   counter: state.counter.myVal
// })

const mapStateToProps = state => ({
  counter: state.getIn(['counter', 'myVal'])
})

const mapDispatchToProps = (dispatch) => ({
  increment: (...args) => dispatch(increment(...args)),
  decrement: (...args) => dispatch(decrement(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Counter))