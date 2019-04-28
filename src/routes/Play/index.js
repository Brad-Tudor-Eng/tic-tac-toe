import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import { move } from 'redux/actions';
import CoreLayout from 'containers/CoreLayout';

import './Play.css';

export class Play extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      //Bug Correction: null doesn't let the player select row or column zero
      row: 0,
      column: 0
    };
  }

  submitMove() {
    const { dispatch } = this.props;
    const { row, column } = this.state;

    //Bug Correction: zero is evaluated as falsey 
    if (row >=0 && column >= 0) {
      dispatch(move(row, column));
    } else {
      alert('You need to pick a row and column before you can move!');
    }
  }

  render () {
    const { game } = this.props;
    const { board, players } = game;

    // HACKY BOARD DRAWING
    const boardCellNumber = 3;
    const cellIndices = [...Array(boardCellNumber).keys()];

    const drawRow = (row) => {
      const center = cellIndices.map(ind => row[ind] || ' ')
        .join(' | ');
      return `| ${ center } |`;
    };

    const verticalBorder = cellIndices.reduce((string) => string.concat('----'), '-')
    const rowHTML = [verticalBorder, ...board.map(drawRow), verticalBorder]
      .map((row, ind) => <p key={ ind }>{ row }</p>);

    return (
      <CoreLayout className="game__container">
        <div>
          <h2>{ players[0] } vs. { players[1] }</h2>
          <p>{ `${ players[game.currentPlayerIndex] }'s turn` }</p>
          <div>
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
            className="submit"
            type="submit"
            onClick={ () => { this.submitMove(); } }
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
