const { default: calculateWinner } = require('./calculateWinner')

describe('Winning logic', () => {
  test('No winner if there is a missing arg', () => {
    expect(calculateWinner({})).toBeFalsy()
  })
  test('No winner if the board state is empty', () => {
    // prettier-ignore
    const boardState = [
      '', '', '',
      '', '', '',
      '', '', '',
    ]
    const boardSize = 3

    expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
  })

  test('No winner if top left = "X" only', () => {
    // prettier-ignore
    const boardState = [
      'X', '', '',
      '', '', '',
      '', '', '',
    ]
    const boardSize = 3

    expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
  })

  test('Winner if first row is full of "X"', () => {
    // prettier-ignore
    const boardState = [
      'X', 'X', 'X',
      '', '', '',
      '', '', '',
    ]
    const boardSize = 3

    expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
  })
})
