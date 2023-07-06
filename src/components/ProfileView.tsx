import React from "react";
import Image from "next/image";
import styled from "styled-components";
import StyledBr from "./ui/StyledBr";

type Props = {
  isPc: boolean;
};

function ProfileView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomImage
        src="/images/kaze_ロゴ.png"
        alt="bar kaze logo"
        width={isPc ? 300 : 150}
        height={isPc ? 300 : 150}
      />
      <CustomText>〒150-0044</CustomText>
      <StyledBr />
      <CustomText>東京都渋谷区円山町1-3 SKビル 4F</CustomText>
      <CustomText>
        SK Building 4F, 1-3 Maruyamacho, Shibuya-ku, Tokyo
      </CustomText>
      <StyledBr />
      <CustomText>東京メトロ 渋谷駅 A2出口 徒歩5分</CustomText>
      <CustomText>Tokyo Metro Shibuya Station, Exit A2, 5 min. walk</CustomText>
    </Container>
  );
}

export default ProfileView;

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

const CustomImage = styled(Image)`
  border-radius: 50%;
  margin: 0 20px;
  margin-top: 16px;
  pointer-events: none;
`;

const CustomText = styled.p`
  font-size: 28px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
