import calculateWinner from '../logic/calculateWinner'

import { MARK_SQUARE, RESET_GAME, CHANGE_CURRENT_PLAYER, CHANGE_SCORE } from './actions'

export const defaultGameSize = 3

export const initialState = {
  currentPlayer: 'X',
  score: { X: 0, O: 0 },
  gameState: Array(defaultGameSize * defaultGameSize).fill(''),
  gameSize: defaultGameSize,
  winner: '',
}

export default function tictactoe(state = initialState, action) {
  switch (action.type) {
    case MARK_SQUARE: {
      const newGameState = [...state.gameState]
      newGameState[action.squarePosition] = state.currentPlayer

      const isWinner = calculateWinner({
        boardSize: state.gameSize,
        boardState: newGameState,
      })

      if (isWinner) {
        return { ...state, gameState: newGameState, winner: state.currentPlayer }
      }

      return { ...state, gameState: newGameState }
    }
    case RESET_GAME: {
      return {
        ...state,
        gameState: initialState.gameState,
        winner: '',
        score: initialState.score,
      }
    }
    case CHANGE_CURRENT_PLAYER: {
      const newCurrentPlayer = state.currentPlayer === 'O' ? 'X' : 'O'

      return { ...state, currentPlayer: newCurrentPlayer }
    }
    case CHANGE_SCORE: {
      return {
        ...state,
        score: { ...state.score, [action.player]: state.score[action.player] + 1 },
      }
    }
    default:
      return state
  }
}
