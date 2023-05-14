import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
      <MenuItem>Menu Item 3</MenuItem>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  padding: 16px;
`;

const MenuItem = styled.div`
  color: white;
  &:hover {
    background-color: #f2f2f2;
  }
`;
