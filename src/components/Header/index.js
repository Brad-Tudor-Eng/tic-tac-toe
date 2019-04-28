import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { resetGame } from 'redux/actions';
import './Header.css';

const Header = (props) => {
  const { dispatch } = props;

  return (
    <header className="header">
      <Link to="/"><img src={ require('assets/logo.svg') } alt="Tic Tac Toe" /></Link>

      <Link to="/" className="btn" onClick={ () => dispatch(resetGame()) }>Start a new game</Link>
    </header>
  )
}

Header.propTypes = {
  dispatch: func.isRequired
};

export default connect()(Header);
