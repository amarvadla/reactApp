import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github'></i> {props.title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Hello'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
