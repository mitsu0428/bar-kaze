import React from "react";
import styled from "styled-components";

const FooterComponents = () => {
  return (
    <Container>
      <Footer>© 2023 bar kaze -円山町</Footer>
    </Container>
  );
};

export default FooterComponents;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
