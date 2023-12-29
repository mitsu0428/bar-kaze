import React from "react";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function SecondView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      {isPc && <VerticalText>Concepts</VerticalText>}
      {isPc && (
        <CustomImage
          src="/images/second_view.jpg"
          alt="second view"
          width={1200}
          height={750}
        />
      )}
      {!isPc && <CustomSubTitle>Concepts</CustomSubTitle>}
      {!isPc && (
        <CustomImageSp
          src="/images/second_view.jpg"
          alt="second view"
          width={360}
          height={225}
        />
      )}
    </Container>
  );
}

export default SecondView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  position: relative;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
`;

const CustomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 8px;
`;

const CustomImageSp = styled(Image)`
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 8px;
`;

const CustomSubTitle = styled.h2`
  position: relative;
  font-size: 80px;
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;
  margin-left: 32px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-left: 8px;
  }
`;

const VerticalText = styled.h2`
  position: absolute;
  top: 25%;
  right: 0;
  margin-top: 32px;
  margin-right: 32px;
  writing-mode: vertical-lr;
  text-align: center;
  font-size: 80px;
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
