import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func, array } from 'prop-types';

import CoreLayout from 'containers/CoreLayout';
import { addPlayer } from 'redux/actions';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { value } = this.state;

    if (value.length > 0) {
      dispatch(addPlayer(value));
      this.setState({ value: '' });
    }
  }

  render() {
    const { players } = this.props;
    const message = `${players.length === 1 ? 'Next, e' : 'E'}nter a name for player number ${players.length + 1}:`;

    const playerHeader = [players[0], players[1]].filter(p => p).join(' vs. ');

    return (
      <CoreLayout>
        <div className="col--center typ--center" style={ { maxWidth: '42rem' } }>
          <h3 className="typ--bold mb6">Let's play Tic Tac Toe</h3>
          {
            playerHeader.length > 0
              ? (
                <h3 className="mb4">
                  { playerHeader }
                </h3>
              )
              : null
          }

          { players.length < 2
            ? (
              <div>
                <p className="typ--b1 mb2">{ message }</p>
                <div style={ { display: 'flex' } }>
                  <input
                    className="form__input mr1"
                    type="text"
                    value={this.state.value}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') { this.handleSubmit(); }
                    }}
                    onChange={(event) => { this.handleChange(event); }}
                  />
                  <input
                    className="btn"
                    type="submit"
                    value="Submit"
                    onClick={() => { this.handleSubmit(); }}
                  />
                </div>
              </div>
            )
            : (
              <Link className="btn" to="/play">
                Start the game
              </Link>
            )
          }
        </div>
      </CoreLayout>
    );
  }
}

const mapStateToProps = state => ({
  players: state.game.players
});

Welcome.propTypes = {
  players: array.isRequired,
  dispatch: func.isRequired
};

export default connect(mapStateToProps)(Welcome);
