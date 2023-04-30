import React from "react";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function InstagramView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomSubTitle>Instagram</CustomSubTitle>
      <ImageMatrix>
        <CustomImage
          src="/images/Instagram/IMG_6474.jpg"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
        <CustomImage
          src="/images/Instagram/IMG_6475.jpg"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
        <CustomImage
          src="/images/Instagram/IMG_6476.jpg"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
        <CustomImage
          src="/images/Instagram/IMG_6477.jpg"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
        <CustomImage
          src="/images/Instagram/IMG_6564.JPG"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
        <CustomImage
          src="/images/Instagram/IMG_6565.JPG"
          alt="instagram"
          width={isPc ? 350 : 175}
          height={isPc ? 350 : 175}
        />
      </ImageMatrix>
    </Container>
  );
}

export default InstagramView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
  @media (max-width: 768px) {
    height: auto;
  }
`;

const CustomSubTitle = styled.h2`
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const ImageMatrix = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CustomImage = styled(Image)`
  margin-top: 16px;
`;
