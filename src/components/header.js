import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const Navbar = styled.div`
  height: 50px;
  width: 100%;
  background: ${theme.colors.default};
`;

const Header = () => {
  return <Navbar>Header</Navbar>;
};

export default Header;
