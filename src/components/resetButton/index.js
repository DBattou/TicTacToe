import { connect } from 'react-redux'
import ResetButton from './ResetButton'
import { resetGame } from '../../redux/actions'

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    resetGameState: () => dispatch(resetGame),
  }
}

export default connect(undefined, mapDispatchToProps)(ResetButton)
