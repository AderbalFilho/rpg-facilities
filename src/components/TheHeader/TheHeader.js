import React from 'react';
import PropTypes from 'prop-types';

import { Alignment, Button, Navbar } from '@blueprintjs/core';

import * as S from './styles.js';

function TheHeader({ navLinks, title }) {
  return (
    <Navbar className="bp3-dark">
      <S.NavContainer>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{title}</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {
            navLinks.map(navLink => {
              return (
                <Button key={navLink.name} className="bp3-minimal" icon={navLink.icon} text={navLink.name} />
              )
            })
          }
        </Navbar.Group>
      </S.NavContainer>
    </Navbar>
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
