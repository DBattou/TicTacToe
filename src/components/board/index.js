import { connect } from 'react-redux'
import { markSquare } from '../../redux/actions'
import Board from '../Board'

// Selectors

// State
const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    gameSize: state.gameSize,
  }
}

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    changeGameState: (squarePosition) => dispatch(markSquare(squarePosition)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
