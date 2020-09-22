import tictactoe, { initialState } from './reducer'
import {
  markSquare,
  resetGame,
  changeCurrentPlayer,
  changeScore,
  resetBoard,
} from './actions'

describe('Reducer', () => {
  test('MARK_SQUARE action ', () => {
    const state = initialState
    const action = markSquare(3)

    // prettier-ignore
    const newGameState = ['', '', '', 
                          'X', '', '', 
                          '', '', '', ]

    expect(tictactoe(state, action)).toEqual({ ...initialState, gameState: newGameState })
  })

  test('MARK_SQUARE action and there is a draw', () => {
    const action = markSquare(0)

    // prettier-ignore
    const gameState = ['', 'O', 'X', 
                       'X', 'O', 'X', 
                       'O', 'X', 'O', ]

    const state = { ...initialState, gameState: gameState }

    // prettier-ignore
    const newGameState = ['X', 'O', 'X', 
                          'X', 'O', 'X', 
                          'O', 'X', 'O', ]

    expect(tictactoe(state, action)).toEqual({
      ...initialState,
      gameState: newGameState,
      draw: true,
    })
  })

  test('RESET_GAME action ', () => {
    const state = initialState
    const action = resetGame()

    // prettier-ignore
    const newGameState = ['', '', '', 
                          '', '', '', 
                          '', '', '', ]

    expect(tictactoe(state, action)).toEqual({ ...initialState, gameState: newGameState })
  })

  test('CHANGE_CURRENT_PLAYER action ', () => {
    const state = initialState
    const action = changeCurrentPlayer()

    expect(tictactoe(state, action)).toEqual({ ...initialState, currentPlayer: 'O' })
  })

  test('CHNAGE_SCORE action ', () => {
    const state = initialState
    const action = changeScore('O')

    expect(tictactoe(state, action)).toEqual({ ...initialState, score: { O: 1, X: 0 } })
  })

  test('ResetBoard action ', () => {
    const state = { ...initialState, draw: true, winner: 'O' }
    const action = resetBoard()

    expect(tictactoe(state, action)).toEqual({
      ...state,
      draw: false,
      winner: '',
    })
  })
})
