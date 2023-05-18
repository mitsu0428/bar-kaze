import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function FooterView({ isPc }: Props) {
  return (
    <Container>
      <CustomFooter>©︎2023 bar kaze -円山町</CustomFooter>
    </Container>
  );
}

export default FooterView;

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CustomFooter = styled.footer`
  width: 100%;
  background-color: #191919;
  color: #fff;
  text-align: center;
  font-size: 32px;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
