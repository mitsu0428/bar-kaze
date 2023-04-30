import React from "react";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function SecondView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      {isPc && (
        <CustomImage
          src="/images/second_view.jpg"
          alt="second view"
          width={1440}
          height={900}
        />
      )}
      {isPc && <VerticalText>Concepts</VerticalText>}
      {!isPc && (
        <CustomImageSp
          src="/images/second_view.jpg"
          alt="second view"
          width={360}
          height={225}
        />
      )}
      {!isPc && <CustomSubTitle>Concepts</CustomSubTitle>}
    </Container>
  );
}

export default SecondView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  padding: 32px;
  position: relative;
`;

const CustomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const CustomImageSp = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CustomSubTitle = styled.h2`
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;

  @media (max-width: 768px) {
    font-size: 50px;
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
  font-size: 100px;
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
