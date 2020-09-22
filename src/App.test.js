import React from 'react'
import { render, fireEvent, screen, within } from './test-utils'
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

    expect(within(topLeftSquare).getByTestId('player_X')).toBeTruthy()

    fireEvent.click(topLeftSquare)

    expect(within(topLeftSquare).getByTestId('player_X')).toBeTruthy()
  })

  test('Can reset the board by pressing the reset button ', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })
    const topLeftSquare = screen.getByTestId('square_0')
    const resetButton = screen.getByText('Reset game')

    fireEvent.click(topLeftSquare)

    expect(within(topLeftSquare).getByTestId('player_X')).toBeTruthy()

    fireEvent.click(resetButton)

    expect(within(topLeftSquare).queryByTestId('player_X')).toBeFalsy()
  })

  test('Can reset the board and the score by pressing the reset button ', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })
    const topLeftSquare = screen.getByTestId('square_0')
    const resetButton = screen.getByText('Reset game')
    const score = screen.getByTestId('player_X_score')

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    expect(within(topLeftSquare).getByTestId('player_X')).toBeTruthy()

    fireEvent.click(resetButton)

    expect(within(topLeftSquare).queryByTestId('player_X')).toBeFalsy()
    expect(score).toHaveTextContent('0-pts')
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

  test('Reset ONLY the board after a winning condition', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })
    const topLeftSquare = screen.getByTestId('square_0')

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    expect(screen.queryByTestId('winingOverlay')).toBeTruthy()
    expect(within(topLeftSquare).getByTestId('player_X')).toBeTruthy()

    fireEvent.click(screen.getByText('OK'))

    expect(within(topLeftSquare).queryByTestId('player_X')).toBeFalsy()
    expect(screen.getByTestId('player_X_score')).toHaveTextContent('1-pts')
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

    expect(playerDisplay).toHaveTextContent('TURN')
    expect(within(playerDisplay).queryByTestId('player_X')).toBeFalsy()
    expect(within(playerDisplay).getByTestId('player_O')).toBeTruthy()
  })
})
