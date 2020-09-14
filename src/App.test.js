import React from 'react'
import { render, fireEvent, screen } from './test-utils'
import App from './App'
import { initialState } from './redux/reducer'

jest.spyOn(window, 'confirm').mockImplementation(() => true)

describe('Tic tac toe', () => {
  const gameSize = 3
  test('Can click on the top left square', () => {
    render(<App gameSize={gameSize}></App>)
    const topLeftSquare = screen.getByTestId('square_0')
    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')
  })

  test('Can reset the game state by pressing the reset button ', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })
    const topLeftSquare = screen.getByTestId('square_0')
    const resetButton = screen.getByText('Reset')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')

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

    expect(window.confirm).toHaveBeenCalled()
  })

  test('After a winning condition the score shoudl be updated', () => {
    render(<App gameSize={gameSize}></App>, { intialState: initialState })

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    const score = screen.getByTestId('player_X_score')

    expect(score).toHaveTextContent('xcvsxwc')
  })
})
