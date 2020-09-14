import { connect } from 'react-redux'
import Score from './Score'

// Selectors

// State
const mapStateToProps = (state) => {
  return {
    gameState: state.score,
  }
}

export default connect(mapStateToProps)(Score)
