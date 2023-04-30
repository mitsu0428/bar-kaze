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
          <CustomText>
            <Link href="mailto: bar.kaze.prj@gmail.com">
              ▶︎ bar.kaze.prj@gmail.com
            </Link>
          </CustomText>
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
          <CustomTextSp>当店では空間を活用して</CustomTextSp>
          <CustomTextSp>
            イベント等を行っていただくことも可能です。
          </CustomTextSp>
          <CustomTextSp>メールまたはDMにてご相談ください。</CustomTextSp>
          <CustomTextSp>
            <Link href="mailto: bar.kaze.prj@gmail.com">
              ▶︎ bar.kaze.prj@gmail.com
            </Link>
          </CustomTextSp>
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
`;

const CustomImageSp = styled(Image)`
  top: 0;
  left: 0;
  z-index: -1;
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
  font-size: 32px;
  text-align: left;
  margin-left: 64px;
  padding: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 32px;
  }
`;

const CustomTextSp = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 16px;
`;
