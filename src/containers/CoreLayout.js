import React from 'react';
import { string, node } from 'prop-types';

import Header from 'components/Header';

const CoreLayout = props => (
  <div className="app">
    <Header />
    <div className={ ['row', props.className].filter(c => c).join(' ') }>
      { props.children }
    </div>
  </div>
);

CoreLayout.propTypes = {
  className: string,
  children: node
};

export default CoreLayout;
