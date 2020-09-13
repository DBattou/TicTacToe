import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

describe('Tic tac toe', () => {
  test('Can click on the top left square', async () => {
    render(<App></App>)
    const topLeftSquare = screen.getByTestId('square_0')
    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')

    fireEvent.click(topLeftSquare)

    expect(topLeftSquare).toHaveTextContent('X')
  })
})
