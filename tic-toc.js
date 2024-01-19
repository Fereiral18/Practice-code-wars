// Si tuviéramos que configurar un juego de Tic-Tac-Toe, querríamos saber si el estado actual del tablero está resuelto, ¿no? ¡Nuestro objetivo es crear una función que lo verifique por nosotros!
const ticToc =() =>{
    const combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return (board) => {
        board = [...board[0], ...board[1], ...board[2]];
        
        for (let i = 0; i < combs.length; i++) {
          if (
            board[combs[i][0]] === board[combs[i][1]] &&
            board[combs[i][1]] === board[combs[i][2]] &&
            board[combs[i][0]] !== 0
          ) {
            return board[combs[i][0]];
          }
        }
        
        return board.includes(0) ? -1 : 0;
      }
}
console.log(ticToc([
    [0,0,1],
    [0,1,2],
    [2,1,0]]));
