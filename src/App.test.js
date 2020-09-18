import React from 'react'
import { render, fireEvent, screen } from './test-utils'
import App from './App'
import { initialState } from './redux/reducer'

import alert from './utils/alert'

jest.spyOn(alert, 'win').mockImplementation(() => true)
jest.spyOn(window, 'confirm').mockImplementation(() => true)

describe('Tic tac toe', () => {
  const gameSize = 3
  test('Can click on the top left square', () => {
    render(<App gameSize={gameSize}></App>)
    const topLeftSquare = screen.getByTestId('square_0')
    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('❌')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('❌')
  })

  test('Can reset the game state by pressing the reset button ', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })
    const topLeftSquare = screen.getByTestId('square_0')
    const resetButton = screen.getByText('Reset game')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('❌')

    fireEvent.click(resetButton)

    expect(topLeftSquare).toHaveTextContent('')
  })

  test('A winning condition should pop an alert', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    expect(screen.queryByTestId('winingOverlay')).toBeTruthy()
  })

  test('After a winning condition the score shoudl be updated', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    const score = screen.getByTestId('player_X_score')

    expect(score).toHaveTextContent('1-pts')
  })

  test('Display the correct current player', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })

    fireEvent.click(screen.getByTestId('square_0'))

    const playerDisplay = screen.getByTestId('currentPlayer_display')

    expect(playerDisplay).toHaveTextContent("It's up to ⭕️ to play")
  })
})
