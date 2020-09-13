import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

jest.spyOn(window, 'alert').mockImplementation(() => {
  console.log('TEST')
})

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
    render(<App gameSize={gameSize}></App>)
    const topLeftSquare = screen.getByTestId('square_0')
    const resetButton = screen.getByText('Reset')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')

    fireEvent.click(resetButton)

    expect(topLeftSquare).toHaveTextContent('')
  })

  test('Can reset the game state by pressing the reset button ', () => {
    render(<App gameSize={gameSize}></App>)

    fireEvent.click(screen.getByTestId('square_0'))
    fireEvent.click(screen.getByTestId('square_1'))
    fireEvent.click(screen.getByTestId('square_3'))
    fireEvent.click(screen.getByTestId('square_4'))
    fireEvent.click(screen.getByTestId('square_6'))

    expect(window.alert).toHaveBeenCalled(1)
  })
})
