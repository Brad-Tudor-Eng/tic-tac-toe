export const init = () => ({
  players: [],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  currentPlayerIndex: 0,
  //track player choices
  playerScore: [[],[]],
  //track existing moves
  moves: [],
  //add moves history array of array of moves
});

const symbols = ['X', 'O'];

const game = (state = init(), action) => {
  switch (action.type) {

    case 'MOVE': {
      const {row,column} = action
      const playerIndex = state.currentPlayerIndex;
      const newBoard = state.board.slice();
      newBoard[row][column] = symbols[playerIndex];

      //track the players choices
      const score = [...state.playerScore]
      const move = (parseInt(row,10) * 3 + parseInt(column,10)) 
      score[playerIndex] = [ ...score[playerIndex], move]
      const moves = [...state.moves, move]

      return {
        ...state,
        //board: newBoard,
        currentPlayerIndex: (playerIndex + 1) % 2,
        playerScore: score,
        moves
      };
    }

    case 'ADD_PLAYER': {
      return {
        ...state,
        players: [...state.players, action.playerName]
      };
    }

    case 'RESET_GAME': {
      return init();
    }

    default: {
      return state;
    }
    
  }
};

export default game;
