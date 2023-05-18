import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function ThirdView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomSubTitle>Events</CustomSubTitle>
      {isPc && (
        <CustomImageContainer>
          <CustomImage
            src="/images/third_view.jpg"
            alt="third view"
            width={1200}
            height={750}
          />
          <CustomText>当店では空間を活用して</CustomText>
          <CustomText>イベント等を行っていただくことも可能です。</CustomText>
          <CustomText>メールまたはDMにてご相談ください。</CustomText>
          <Link href="/mail">
            <BasicButton>お問い合わせはこちら</BasicButton>
          </Link>
        </CustomImageContainer>
      )}
      {!isPc && (
        <CustomImageContainerSp>
          <CustomImageSp
            src="/images/third_view.jpg"
            alt="third view"
            width={360}
            height={225}
          />
          <CustomText>当店では空間を活用して</CustomText>
          <CustomText>イベント等を行っていただくことも可能です。</CustomText>
          <CustomText>メールまたはDMにてご相談ください。</CustomText>

          <Link href="/mail">
            <BasicButton>お問い合わせはこちら</BasicButton>
          </Link>
        </CustomImageContainerSp>
      )}
    </Container>
  );
}

export default ThirdView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 80vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
`;

const CustomImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CustomImageContainerSp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CustomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  border-radius: 8px;
`;

const CustomImageSp = styled(Image)`
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 8px;
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
    margin-left: 16px;
  }
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  margin-top: 64px;
  margin-left: 64px;
  text-decoration: none;
  color: white;
  background-color: gray;
  border: none;
  border-radius: 0.5rem;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #cc5757;
  }
  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;
