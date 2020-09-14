const alert = {
  win(winner) {
    setTimeout(function () {
      if (window.alert(`Player ${winner} wins !`)) {
      }
    }, 100)
  },
}
export default alert
