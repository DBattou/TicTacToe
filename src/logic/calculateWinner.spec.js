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

  describe('Winning on rows', () => {
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

    test('Winner if the second row is full of "X"', () => {
      // prettier-ignore
      const boardState = [
            '', '', '',
            'X', 'X', 'X',
            '', '', '',
          ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('Winner if the last row is full of "X"', () => {
      // prettier-ignore
      const boardState = [
            '', '', '',
            '', '', '',
            'X', 'X', 'X',
          ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('Works fine with the "O" too', () => {
      // prettier-ignore
      const boardState = [
            '', '', '',
            'O', 'O', 'O',
            '', '', '',
          ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('No Winner if there is a draw', () => {
      // prettier-ignore
      const boardState = [
        'O', 'x', 'O',
        'O', 'X', 'X',
        'X', 'O', 'X',
      ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
    })

    test('Winner after some moves', () => {
      // prettier-ignore
      const boardState = [
        'X', 'O', 'O',
        'X', 'X', 'X',
        'O', '', '',
      ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })
  })

  describe('Winning on columns', () => {
    test('Winner on the first column', () => {
      // prettier-ignore
      const boardState = [
        'X', '', '',
        'X', '', '',
        'X', '', '',
      ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('Winner on the second column', () => {
      // prettier-ignore
      const boardState = [
        '', 'X', '',
        '', 'X', '',
        '', 'X', '',
      ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('Winner on the last column', () => {
      // prettier-ignore
      const boardState = [
        '', '', 'X',
        '', '', 'X',
        '', '', 'X',
      ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })
  })

  describe('Winner on diagonal', () => {
    test('Winner on diagonal', () => {
      // prettier-ignore
      const boardState = [
              'X', '', '',
              '', 'X', '',
              '', '', 'X',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })
  })

  describe('Winner on the opposite diagonal', () => {
    test('Winner on opposite diagonal', () => {
      // prettier-ignore
      const boardState = [
              '', '', 'X',
              '', 'X', '',
              'X', '', '',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })
  })

  describe('Some additionnal tests', () => {
    test('There is a draw', () => {
      // prettier-ignore
      const boardState = [
              'X', 'O', 'X',
              'O', 'O', 'X',
              'X', 'X', 'O',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
    })

    test('O is winner on diagonal', () => {
      // prettier-ignore
      const boardState = [
              'X', 'X', 'O',
              'O', 'O', 'X',
              'O', '', '',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('O is winner on diagonal', () => {
      // prettier-ignore
      const boardState = [
              'O', 'X', 'X',
              'O', 'O', 'X',
              'X', '', 'O',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })

    test('No winner', () => {
      // prettier-ignore
      const boardState = [
              'O', '', '',
              '', '', 'X',
              'X', '', 'O',
            ]
      const boardSize = 3

      expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
    })

    test('No winner on a 6 by 6 board', () => {
      // prettier-ignore
      const boardState = [
              'O', '', '','O', '', '',
              '', '', 'X','', '', 'X',
              'X', '', 'O','X', '', 'O',
              'O', '', '','O', '', '',
              '', '', 'X','', '', 'X',
              'X', '', 'O','X', '', 'O',
            ]
      const boardSize = 6

      expect(calculateWinner({ boardState, boardSize })).toBeFalsy()
    })

    test('X winner on a 6 by 6 board', () => {
      // prettier-ignore
      const boardState = [
              'O', '', '','O', '', '',
              'X', 'X', 'X','X', 'X', 'X',
              'X', '', 'O','X', '', 'O',
              'O', '', '','O', '', '',
              '', '', 'X','', '', 'X',
              'X', '', 'O','X', '', 'O',
            ]
      const boardSize = 6

      expect(calculateWinner({ boardState, boardSize })).toBeTruthy()
    })
  })
})
