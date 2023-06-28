import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function ShopNews({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomSubTitle>News</CustomSubTitle>
      <SubContainer>
        <CustomText>2023.04.25</CustomText>
        <CustomTextMin>POP UP Vintage & Archives EVENT</CustomTextMin>
        <CustomText>2023.07.06 ~ 07.08</CustomText>
        <CustomTextMin>1ST ANNIVERSARY EVENT</CustomTextMin>
      </SubContainer>
    </Container>
  );
}

export default ShopNews;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  ${(props) => props.isPc && "height: 50vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 64px;"}
  ${(props) => !props.isPc && "margin-top: 32px;"}
`;

const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CustomSubTitle = styled.h2`
  font-size: 80px;
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;
  margin-left: 32px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const CustomText = styled.p`
  position: relative;
  padding: 8px;
  font-size: 32px;
  text-align: left;
  margin-left: 64px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
    margin-left: 24px;
  }
`;

const CustomTextMin = styled.p`
  position: relative;
  padding: 8px;
  font-size: 24px;
  text-align: left;
  margin-left: 96px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;
    margin-left: 40px;
  }
`;
