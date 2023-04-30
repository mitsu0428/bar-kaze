import React from "react";
import Image from "next/image";
import styled from "styled-components";

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
      <CustomText>東京都渋谷区円山町1-3 SKビル 4F</CustomText>
      <CustomText>TEL: 03-6416-3943</CustomText>
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
`;

const CustomText = styled.p`
  font-size: 32px;
  text-align: cemter;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
