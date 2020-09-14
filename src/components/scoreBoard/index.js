import { connect } from 'react-redux'
import ScoreBoard from './ScoreBoard'

// Selectors

// State
const mapStateToProps = (state) => {
  return {
    gameState: state.score,
  }
}

export default connect(mapStateToProps)(ScoreBoard)
