import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function InformationView({ isPc }: Props) {
  return (
    <Container>
      {isPc ? (
        <>
          <CustomText>OPEN 20:00 - 5:00</CustomText>
          <CustomText>東京メトロ渋谷駅 A2出口 徒歩5分</CustomText>
        </>
      ) : (
        <>
          <CustomText>OPEN 20:00 - 5:00</CustomText>
          <CustomText>東京メトロ渋谷駅 A2出口 徒歩5分</CustomText>
        </>
      )}
    </Container>
  );
}

export default InformationView;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CustomText = styled.p`
  font-size: 44px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
