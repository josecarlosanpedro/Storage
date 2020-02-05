import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
class Header extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location = 'login'
  }
  render() {
    const { isLoggedIn } = this.props
    return (
      <header className="header-section">
        <div>
          <span className=" _text-snow -text-lg">Carlo Storage</span>
          {isLoggedIn && <button className="logout-btn" onClick={this.handleLogout}>Log Out</button>}
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
export default Header;
