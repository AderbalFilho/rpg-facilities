import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles.js';

function TheHeader({ navLinks, title }) {
  return (
    <nav className="bp3-navbar bp3-dark">
      <S.NavContainer>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">{title}</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          {
            navLinks.map(navLink => {
              return (
                <button
                  key={navLink.name}
                  className={
                    navLink.icon ? `bp3-button bp3-minimal bp3-icon-${navLink.icon}` : 'bp3-button bp3-minimal'
                  }
                >
                  {navLink.name}
                </button>
              )
            })
          }
        </div>
      </S.NavContainer>
    </nav>
  );
}

TheHeader.defaultProps = {
  navLinks: [{ name: 'Home', icon: 'home', link: '/' }],
  title: ''
};

TheHeader.propTypes = {
  navLinks: PropTypes.array,
  title: PropTypes.string,
};

export default TheHeader;
