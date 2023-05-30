import Image from "next/image";
import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function InformationView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      {isPc ? (
        <>
          <StyledImage
            src="/images/map/bar-kaze-map.png"
            alt="bar kaze までの道のり画像"
            width={isPc ? 600 : 300}
            height={isPc ? 600 : 300}
          />
          <CustomText>OPEN 20:00 - 5:00</CustomText>
          <CustomText>東京メトロ渋谷駅 A2出口 徒歩5分</CustomText>
        </>
      ) : (
        <>
          <StyledImage
            src="/images/map/bar-kaze-map.png"
            alt="bar kaze までの道のり画像"
            width={isPc ? 600 : 300}
            height={isPc ? 600 : 300}
          />
          <CustomText>OPEN 20:00 - 5:00</CustomText>
          <CustomText>東京メトロ渋谷駅 A2出口 徒歩5分</CustomText>
        </>
      )}
    </Container>
  );
}

export default InformationView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
`;

const CustomText = styled.p`
  font-size: 32px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;
