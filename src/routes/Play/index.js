import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import { move } from 'redux/actions';
import CoreLayout from 'containers/CoreLayout';
import _ from 'lodash'
import './Play.css';

const winningCondition = [
  //horizontals
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //diagonals
  [0,4,8],
  [2,4,6],
  //verticals
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

export class Play extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      //first bug: row and column should not be null
      //prevents player from selecting first row or colum
      row: 0,
      column: 0,
      endOfGame: false,
      winner: 2
    };
  }

  componentDidUpdate(){
    const {playerScore, moves, currentPlayerIndex, players } = this.props.game

      //check for winning condition if so end game
      if(!this.state.endOfGame){
        winningCondition.forEach(condition=>{
          //compare the selected squares of both players with the winning
          if( _.difference(condition,playerScore[0]).length === 0 ){
              this.setState({endOfGame: true, winner: 0})
          }else if(_.difference(condition,playerScore[1]).length === 0 ){
              this.setState({endOfGame: true, winner: 1})
          }

        })
  
       //check for a stalemate
        if(playerScore[1].length >= 4){
          //find missing square
          let left = (9*8)/2 - moves.reduce((col,el)=>col+el,0)
          let test = [...playerScore[currentPlayerIndex],left]
          let testResult = true
          //check to see if it will win the game
          winningCondition.forEach(condition=>{
            if(_.difference(condition,test).length === 0){
              testResult = false
            }
          })
          //if not then it's a draw
          if(testResult){
            this.setState({endOfGame: true})
          }
        }
      }else{
        switch(this.state.winner){
          case 2:{
            alert('No body wins :(')
            break
          }
          default: alert(`${players[this.state.winner]} wins!`)
        }
      }
      
  }

  submitMove({row,column}) {
    const { dispatch, game } = this.props;
    const { endOfGame } = this.state;
    const playerChoice = parseInt(row,10) * 3 + parseInt(column,10)

    const taken = game.moves.includes(playerChoice)
    
    //check to see if square has already been taken
    // if yes then don't submit move aleart player

    //second bug: row and column should not be null
    if (row >= 0 && column >=0 && !taken && !endOfGame) {
      dispatch(move(row, column));
    } else if(this.state.endOfGame){
      alert("Game Over! Please start a new game")
    } else {
      alert('Please pick a different row or column!');
    }

  }

  render () {
    const { game } = this.props;
    const { board,players } = game;

    // HACKY BOARD DRAWING
    const boardCellNumber = 3;
    const cellIndices = [...Array(boardCellNumber).keys()];

    const drawRow = (row,rowIndex) => {

      return cellIndices.map((ind) =>{
        
        if(row[ind]){
          return <button className={`board__button board__button_player_${row[ind]}`} key={ind}>{row[ind]}</button>
        }else{
          return <button 
                  onClick={()=>{ this.submitMove({row: rowIndex, column:ind})}}key={ind}
                  className={`board__button`}
                  ></button>
        }

      });
    };

    const rowHTML = [ ...board.map( (row,index) => {return drawRow(row,index)}) ]
      .map((row, ind) => <div className="board__row" key={ ind }>{ row }</div>);

    return (
      <CoreLayout className="game__container">
        <div className="game__board">
          <h2>{ players[0] } vs. { players[1] }</h2>
          <p>{ `${ players[game.currentPlayerIndex] }'s turn` }</p>
          <div className="game__board__container">
            { rowHTML }
          </div>

          <div>
            Select a row:
            <select
              value={ this.state.row }
              onChange={ (event) => { this.setState({ row: Number(event.target.value) }) } }
            >
              {
                cellIndices.map(ind => (
                  <option value={ ind } key={ ind } >{ ind }</option>
                ))
              }
            </select>
          </div>

          <div>
            Select a column:
            <select
              value={ this.state.column }
              onChange={ (event) => { this.setState({ column: event.target.value }) } }
            >
              {
                cellIndices.map(ind => (
                  <option value={ ind } key={ ind } >{ ind }</option>
                ))
              }
            </select>
          </div>

          <input
            className="submit btn"
            type="submit"
            onClick={ () => { this.submitMove({row: this.state.row, column: this.state.column}); } }
          />
        </div>
      </CoreLayout>
    );
  }
};

const mapStateToProps = state => ({
  game: state.game
});

Play.propTypes = {
  game: object.isRequired,
  dispatch: func.isRequired
};

export default connect(mapStateToProps)(Play);
