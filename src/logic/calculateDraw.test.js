import calculateDraw from './calculateDraw'

describe('CalculateDraw', () => {
  it('There is no winner and the board is empty', () => {
    // prettier-ignore
    const boardState = [
      '', '', '',
      '', '', '',
      '', '', '',
    ]
    const boardSize = 3

    expect(calculateDraw({ boardState, boardSize })).toBeFalsy()
  })

  it('There is no winner and the board is not empty', () => {
    // prettier-ignore
    const boardState = [
      'X', '', '',
      'O', 'O', 'X',
      'X', '', '',
    ]
    const boardSize = 3

    expect(calculateDraw({ boardState, boardSize })).toBeFalsy()
  })

  it('There is a winner', () => {
    // prettier-ignore
    const boardState = [
      'X', '', '',
      '', 'X', '',
      'O', '', 'X',
    ]
    const boardSize = 3

    expect(calculateDraw({ boardState, boardSize })).toBeFalsy()
  })

  it('The board is full and there is no winner', () => {
    // prettier-ignore
    const boardState = [
      'X', 'O', 'X',
      'O', 'O', 'X',
      'X', 'X', 'O',
    ]
    const boardSize = 3

    expect(calculateDraw({ boardState, boardSize })).toBeTruthy()
  })
})
